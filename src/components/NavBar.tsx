import logo from "../assets/logo.webp";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="flex flex-row p-[10px] items-center w-full">
      <img src={logo} width="60" height="60"></img>
      <form className="w-full">
        <div className="relative flex items-center">
          <BsSearch
            color="white"
            size="35px"
            className="absolute px-[10px]"
          ></BsSearch>
          <input
            className="w-full bg-gray-900 rounded-[20px] pl-[30px] p-[5px]"
            placeholder="Search games..."
          ></input>
        </div>
      </form>
    </div>
  );
};

export default NavBar;
