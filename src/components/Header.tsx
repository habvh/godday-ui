import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { Content } from "./Content";
import { GoDaddyIcon } from "./icons/Godaddy";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="text-go-black mt-5">
      <Content className="flex justify-between w-full items-center">
        <div className="flex gap-10 items-center">
          <div>
            <a href="https://www.godaddy.com/vi-vn" target="_blank">
              <GoDaddyIcon classCustom="w-32" />
            </a>
          </div>
          <nav>
            <ul className="flex gap-5">
              <li className="p-3">
                <a href="#">Domain Names</a>
              </li>
              <li className="p-3">
                <a href="#">Websites & Hosting</a>
              </li>
              <li className="p-3">
                <a href="#">Commerce</a>
              </li>
              <li className="p-3">
                <a href="#">Email & Marketing</a>
              </li>
              <li className="p-3">
                <a href="#">Expert Services</a>
              </li>
              <li className="p-3">
                <a href="#">More</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <Button>Help Center</Button>
          </div>
          <div>
            <Button icon={<IoIosArrowDown />}>Sign In</Button>
          </div>
          <div>
            <IoCartOutline />
          </div>
        </div>
      </Content>
    </header>
  );
}
