import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const iconMapSizing: { [key: number]: any } = {
    3: meh,
    4: thumbsUp,
    5: bullsEye,
  };

  return <img src={iconMapSizing[rating]} className="w-[25px] h-[25px]"></img>;
};

export default Emoji;
