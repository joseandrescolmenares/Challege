
import Popover from "./Popover";
import Emolji from "./Emolji";


const Card = ({item}) => {
  return (
    <div key={item} className="relative">
      <img
        className=" flex w-[330px] h-[380px] rounded-lg shadow-md object-cover "
        src={item.url}
      />
      <Popover imageUrl={item.url} />
      <div className="absolute bottom-1 left-0 ">
        <p className=" m-8 text-white text-sm"> {item.username}</p>
      </div>
      <Emolji item={item} />
    </div>
  );
};

export default Card;
