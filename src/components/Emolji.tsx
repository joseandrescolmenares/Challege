
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
}

function Emolji({ item }) {
  return (
    <div className="absolute bottom-0 left-0 m-2 right-0 ">
      <span
        className="text-white text-xs p-1"
        role="img"
        aria-label="Comentarios"
      >
        {formatNumber(item.stats.commentCount)} 💬
      </span>
      <span className="text-white text-xs p-1" role="img" aria-label="Llanto">
        {formatNumber(item.stats.cryCount)} 😢
      </span>
      <span
        className="text-white text-xs p-1"
        role="img"
        aria-label="Disgusto"
      >
        {formatNumber(item.stats.dislikeCount)} 😠
      </span>
      <span
        className="text-white text-xs p-1"
        role="img"
        aria-label="Corazón"
      >
        {formatNumber(item.stats.heartCount)} ❤️
      </span>
      <span className="text-white text-xs p-2" role="img" aria-label="Risa">
        {formatNumber(item?.stats.laughCount)} 😄
      </span>
      <spa
        className="text-white text-xs p-1"
        role="img"
        aria-label="Me gusta"
      >
        {formatNumber(item.stats.likeCount)} 👍
      </spa>
    </div>
  );
}

export default Emolji;