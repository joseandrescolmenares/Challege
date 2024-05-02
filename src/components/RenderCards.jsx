
import { useInfiniteQuery } from "react-query";
import { useEffect, useRef} from "react";
import Card from "./Card";

function InfiniteScroll() {
  const fetchData = async (pageParam = 1) => {
    console.log(pageParam, "para");
    const response = await fetch(
      `https://civitai.com/api/v1/images?page=${pageParam}&limit=10`
    );
    return response.json();
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage,} =
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

  
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full ">
      <div className="   bg-black/90 w-[670px] p-0 m-0 flex justify-start rounded-lg shadow-md object-cover flex flex-col justify-start p-10">
        <h1 className="text-2xl font-bold text-white mb-4">
          Featured Articles
        </h1>
        <p className="text-base text-white mb-6">
          Discover information, guides, tutorials, and in-depth analysis on
          various topics. Created by the community, for the community.
        </p>
        <button className=" bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-72">
          Explore All Articles
        </button>
      </div>
      {data?.pages?.map((el) =>
        el.items?.map((item) => (
          <Card key={item.id} item={item}/>
        ))
      )}

      <div id="sentinel" style={{ height: "1px" }}></div>
      {isFetchingNextPage && <div>Cargando...</div>}
    </div>
  );
}
export default InfiniteScroll;
