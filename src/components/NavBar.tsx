import { useRef } from "react";
import logo from "../assets/logo.webp";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  // const mouseRef = useRef<HTMLElement>(null);

  const throttleElement = document.getElementById("default");

  document.addEventListener("mousemove", (e) => {
    console.log("here");
    incrementCount(throttleElement);
    // updateThrottleText();
  });

  // const updateThrottleText = throttle(() => {
  //   incrementCount(throttleElement);
  // }, 100);

  function incrementCount(element: HTMLElement) {
    if (element) {
      element.textContent = ((parseInt(element.innerText) || 0) + 1).toString();
    } else {
      console.log("Element is null");
    }
  }

  // function throttle(callback: any, delay = 1000) {
  //   let shouldWait = false;
  //   let waitingArgs: any;
  //   let timeoutFunction = () => {
  //     if (waitingArgs === null) {
  //       shouldWait = false;
  //     } else {
  //       callback(waitingArgs);
  //       waitingArgs = null;
  //       setTimeout(timeoutFunction, delay);
  //     }
  //   };

  //   return (...args: any) => {
  //     if (shouldWait) {
  //       waitingArgs = args;
  //       return;
  //     }
  //     callback(...args);
  //     shouldWait = true;

  //     setTimeout(timeoutFunction, delay);
  //   };
  // }

  const updateSearch = debounce((text: string) => {
    onSearch(text);
  }, 1000);

  function debounce(callback: any, delay: number) {
    let timeout: number;

    return (search: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(search);
      }, delay);
    };
  }

  return (
    <div className="flex flex-row p-[10px] items-center w-full justify-evenly">
      <img src={logo} width="60" height="60"></img>
      {/* <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) {
            onSearch(ref.current.value);
          }
        }}
      > */}
      <div className="relative flex items-center w-full">
        <BsSearch
          color="white"
          size="35px"
          className="absolute px-[10px]"
        ></BsSearch>
        <input
          ref={ref}
          className="w-full bg-gray-900 rounded-[20px] pl-[30px] p-[5px] text-white"
          placeholder="Search games..."
          type="text"
          onKeyUp={(e) => {
            e.preventDefault();
            if (ref.current) {
              updateSearch(e.currentTarget.value);
            }
          }}
        ></input>
      </div>
      <span id="default" className="text-white p-[10px]"></span>
      {/* </form> */}
    </div>
  );
};

export default NavBar;
