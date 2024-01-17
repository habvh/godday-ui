import { IoSearchOutline } from "react-icons/io5";
import { Button } from "./Button";

type InputProps = {
  isDarkMode?: boolean;
  placeholder?: string;
  textButton?: string;
};

export default function Input({
  isDarkMode,
  textButton,
  placeholder,
}: InputProps) {
  return (
    <form className="flex-1">
      <div
        className={`${
          isDarkMode ? "bg-gray-900 text-go-gray" : "bg-go-gray"
        } flex`}
      >
        <div className="flex flex-1 pl-10 pr-5 items-center">
          <input
            type="text"
            placeholder={placeholder}
            className="bg-transparent w-full lg:text-xl outline-none"
          />
        </div>
        <div>
          <Button
            className={`${
              isDarkMode
                ? "bg-go-white text-go-black"
                : "bg-go-jade text-go-white"
            } py-3 px-4 lg:py-5 lg:px-8 font-bold`}
          >
            <p className="hidden md:block">{textButton}</p>
            <div className="md:hidden block">
              <IoSearchOutline className="w-5 h-5" />
            </div>
          </Button>
        </div>
      </div>
    </form>
  );
}
