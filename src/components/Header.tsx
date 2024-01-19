import {
  IoCartOutline,
  IoHelpCircleOutline,
  IoPersonOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { Content } from "./Content";
import { GoDaddyIcon } from "./icons/Godaddy";
import { Button } from "./Button";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubMenu = () => {
    if (!isOpen) {
      document
        .getElementsByClassName("nav-flyout-open")[0]
        .classList.add("invibile-scroll");

      setIsOpen(true);
    } else {
      document
        .getElementsByClassName("nav-flyout-open")[0]
        .classList.remove("invibile-scroll");
      setIsOpen(false);
    }
  };

  return (
    <header className="text-go-black mt-5 text-lg xl:text-base 2xl:text-lg">
      <Content className="flex justify-between w-full items-center">
        <div className="flex gap-2 md:gap-2 2xl:gap-10 items-center">
          <div className="flex items-center gap-2">
            <div className="xl:hidden">
              <IoMenuOutline className="w-10 h-10" onClick={handleSubMenu} />
            </div>
            <a href="https://www.godaddy.com/vi-vn" target="_blank">
              <GoDaddyIcon className="w-32 mobile" />
            </a>
          </div>
          <nav
            className={`${
              isOpen ? "opacity-100 p-4" : "-translate-x-[100%]"
            } fixed z-20 w-80 bg-go-white top-0 left-0 h-full opacity-0 xl:translate-x-0 xl:opacity-100 xl:visible xl:relative xl:w-auto xl:h-auto xl:bg-transparent transition-transform duration-700`}
          >
            <ul className="xl:flex 2xl:gap-5">
              <li className="p-2 2xl:p-3 xl:hidden">
                <a href="https://www.godaddy.com/vi-vn" target="_blank">
                  <GoDaddyIcon className="w-32 mobile" />
                </a>
              </li>
              <li className="p-2 2xl:p-3">
                <a href="#">Domain Names</a>
              </li>
              <li className="p-2 2xl:p-3">
                <a href="#">Websites & Hosting</a>
              </li>
              <li className="p-2 2xl:p-3">
                <a href="#">Commerce</a>
              </li>
              <li className="p-2 2xl:p-3">
                <a href="#">Email & Marketing</a>
              </li>
              <li className="p-2 2xl:p-3">
                <a href="#">Expert Services</a>
              </li>
              <li className="p-2 2xl:p-3">
                <a href="#">More</a>
              </li>
            </ul>
            <div className="absolute top-0 right-0 xl:hidden">
              <IoCloseOutline
                className="w-10 h-10 cursor-pointer"
                onClick={handleSubMenu}
              />
            </div>
          </nav>
          <div
            className={`${
              isOpen ? "opacity-100 visible" : "invisible"
            } absolute top-0 right-0 opacity-0 z-10 w-full h-full backdrop-blur-sm bg-go-black/35 transition-all duration-700`}
          ></div>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <div className="block xl:hidden">
              <IoHelpCircleOutline className="w-5 h-5" />
            </div>
            <div className="xl:block hidden">
              <Button isDefaultStyle={false}>Help Center</Button>
            </div>
          </div>
          <div>
            <div className="block xl:hidden">
              <IoPersonOutline className="w-5 h-5" />
            </div>
            <div className="xl:block hidden">
              <Button isDefaultStyle={false} icon={<IoIosArrowDown />}>
                Sign In
              </Button>
            </div>
          </div>
          <div className="cart">
            <IoCartOutline className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </Content>
    </header>
  );
}
