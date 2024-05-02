function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
}

function renderEmoji(name, count, label) {
  return (
    <span className="text-white text-xs p-1" role="img" aria-label={label}>
      {formatNumber(count)} {name}
    </span>
  );
}

function Emolji({ item }) {
  const emojiMappings = {
    commentCount: "💬",
    cryCount: "😢",
    dislikeCount: "😠",
    heartCount: "❤️",
    laughCount: "😄",
    likeCount: "👍"
  };

  return (
    <div className="absolute bottom-0 left-0 m-2 right-0 ">
      {Object.entries(item.stats).map(([key, value]) =>
        renderEmoji(emojiMappings[key], value, key)
      )}
    </div>
  );
}

export default Emolji;
