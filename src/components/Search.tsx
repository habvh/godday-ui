import { Button } from "./Button";
import { Content } from "./Content";
import { Domains } from "./Domains";

export function Search() {
  return (
    <article>
      <Content className="my-5 flex gap-10 items-center">
        <form className="flex-1">
          <div className="bg-go-gray flex">
            <div className="flex flex-1 pl-14 pr-5 items-center">
              <input
                type="text"
                placeholder="Type the domain you want"
                className="bg-transparent w-full text-xl outline-none"
              />
            </div>
            <div>
              <Button className="bg-go-jade text-go-white py-5 px-8 font-bold">
                Search Domain
              </Button>
            </div>
          </div>
        </form>
        <Domains />
      </Content>
    </article>
  );
}
