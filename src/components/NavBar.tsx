import { useRef } from "react";
import logo from "../assets/logo.webp";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-row p-[10px] items-center w-full">
      <img src={logo} width="60" height="60"></img>
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) {
            onSearch(ref.current.value);
          }
        }}
      >
        <div className="relative flex items-center">
          <BsSearch
            color="white"
            size="35px"
            className="absolute px-[10px]"
          ></BsSearch>
          <input
            ref={ref}
            className="w-full bg-gray-900 rounded-[20px] pl-[30px] p-[5px] text-white"
            placeholder="Search games..."
          ></input>
        </div>
      </form>
    </div>
  );
};

export default NavBar;
