import { IoSearchOutline } from "react-icons/io5";
import { Button } from "./Button";
import { Content } from "./Content";
import { Domains } from "./Domains";

export default function Search() {
  return (
    <article>
      <Content className="my-5 flex gap-10 items-center">
        <form className="flex-1">
          <div className="bg-go-gray flex">
            <div className="flex flex-1 pl-10 pr-5 items-center">
              <input
                type="text"
                placeholder="Type the domain you want"
                className="bg-transparent w-full text-xl outline-none"
              />
            </div>
            <div>
              <Button className="bg-go-jade text-go-white py-5 px-8 font-bold">
                <p className="hidden md:block">Search Domain</p>
                <div className="md:hidden block">
                  <IoSearchOutline className="w-5 h-5" />
                </div>
              </Button>
            </div>
          </div>
        </form>
        <div className="hidden xl:block">
          <Domains />
        </div>
      </Content>
    </article>
  );
}
