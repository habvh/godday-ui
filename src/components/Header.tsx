import {
  IoCartOutline,
  IoHelpCircleOutline,
  IoPersonOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { Content } from "./Content";
import { GoDaddyIcon } from "./icons/Godaddy";
import { Button } from "./Button";

export default function Header() {
  return (
    <header className="text-go-black mt-5 text-sm xl:text-lg">
      <Content className="flex justify-between w-full items-center">
        <div className="flex gap-2 md:gap-2 2xl:gap-10 items-center">
          <div className="flex items-center gap-2">
            <div className="xl:hidden">
              <IoMenuOutline className="w-10 h-10" />
            </div>
            <a href="https://www.godaddy.com/vi-vn" target="_blank">
              <GoDaddyIcon classCustom="w-32 mobile" />
            </a>
          </div>
          <nav>
            <ul className="hidden xl:flex 2xl:gap-5">
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
          </nav>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <div className="block md:hidden">
              <IoHelpCircleOutline className="w-5 h-5" />
            </div>
            <div className="md:block hidden">
              <Button>Help Center</Button>
            </div>
          </div>
          <div>
            <div className="block md:hidden">
              <IoPersonOutline className="w-5 h-5" />
            </div>
            <div className="md:block hidden">
              <Button isDefaultStyle={false} icon={<IoIosArrowDown />}>
                Sign In
              </Button>
            </div>
          </div>
          <div className="cart">
            <IoCartOutline className="w-5 h-5" />
          </div>
        </div>
      </Content>
    </header>
  );
}
