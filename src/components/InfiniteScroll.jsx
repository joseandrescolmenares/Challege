//
import { useInfiniteQuery } from "react-query";
import { useEffect, useRef } from "react";

function InfiniteScroll() {
  const fetchData = async (pageParam = 1) => {
    console.log(pageParam, "para");
    const response = await fetch(
      `https://civitai.com/api/v1/images?page=${pageParam}&limit=10`
    );
    return response.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, } =
    useInfiniteQuery(["items"], ({ pageParam }) => fetchData(pageParam), {
      getNextPageParam: (lastPage) => {
        console.log();
        console.log(lastPage);
        if (lastPage.metadata.nextPage)
          return lastPage.metadata.currentPage + 1;
      },
    });

  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    if (observer.current) {
      observer.current.observe(document.querySelector("#sentinel"));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

console.log(data)

  return (
    <div>
      {data?.pages?.map((el) =>
        el.items?.map((item) => <img style={{width:`${item.width}px`}}  key={item} src={item.url} />)
      )}
      <div id="sentinel" style={{ height: "1px" }}></div>
      {isFetchingNextPage && <div>Cargando...</div>}
    </div>
  );
}
export default InfiniteScroll;
