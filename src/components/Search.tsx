import { IoSearchOutline } from "react-icons/io5";
import { Button } from "./Button";
import { Content } from "./Content";
import { Domains } from "./Domains";
import Input from "./Input";

export default function Search() {
  return (
    <article>
      <Content className="my-5 flex gap-10 items-center">
        <Input
          textButton="Search Domains"
          placeholder="Type the domain you want"
        />
        <div className="hidden xl:block">
          <Domains />
        </div>
      </Content>
    </article>
  );
}
