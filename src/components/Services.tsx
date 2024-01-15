import { Image } from "./Image";
import { Content } from "./Content";
import bgWeb from "../../public/images/row-mrq-hp-web.webp";
import bgTable from "../../public/images/row-mrq-hp-tablet.webp";
import bgPortrait from "../../public/images/row-mrq-hp-portrait.webp";
import { Button } from "./Button";
import React from "react";

const ServiceItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <div className="group transition-all duration-200 cursor-pointer py-5 ease-in hover:bg-go-black hover:text-go-white h-full text-center flex items-center justify-center gap-4">
      <a href={href}>{children}</a>
    </div>
  );
};

export default function Services() {
  return (
    <section>
      <Content>
        <section className="grid grid-cols-auto30 grid-rows-1 gap-4 ">
          <Image
            className="md:min-h-[31vw]"
            imageAlt="background"
            imageUrl="https://img1.wsimg.com/cdnassets/transform/9fe7d867-9c96-44f4-9c62-48e594446440/row-mrq-hp-landscape"
            imageSrcSets={[`${bgPortrait}`, `${bgTable} 2x`, `${bgWeb} 3x`]}
          >
            <article className="font-medium grid grid-cols-2 items-center h-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8">
                  <p>Websites + Marketing</p>
                  <p className="text-5xl font-serif font-bold">
                    Tools for all your business firsts.
                  </p>
                  <p>Website and store solutions for any small business</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button className="bg-go-black text-go-white py-4 px-14 rounded-lg">
                    Get Started
                  </Button>
                  <div>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <p className="font-normal text-sm">
                  No credit card required<sup>**</sup>
                </p>
              </div>
            </article>
          </Image>
          <Image className="bg-go-jade-light">
            <article className="font-medium items-center h-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8">
                  <p>Domain Names</p>
                  <p className="text-3xl font-medium">
                    Grab a .com for just $0.01<sup>*</sup>/1st yr
                  </p>
                  <p>
                    2-year purchase required<sup>*</sup>
                  </p>
                </div>
                <div className="my-2">
                  <Button className="bg-go-black text-go-white py-4 px-14 rounded-lg">
                    Find Your Domain
                  </Button>
                </div>
                <p>
                  <a href="#">Transfer Your Domains</a>
                </p>
                <p className="font-normal text-sm">
                  Domain include free primacy profection forever<sup>*</sup>
                </p>
              </div>
            </article>
          </Image>
        </section>
        <section className="my-4">
          <ul className="grid grid-cols-5 grid-rows-2 border border-go-gray">
            <li className="border border-go-gray">
              <ServiceItem href="#">Domains</ServiceItem>
            </li>
            <li className="border border-go-gray">
              <ServiceItem href="#">SSL Security</ServiceItem>
            </li>
            <li className="border border-go-gray">
              <ServiceItem href="#">Websites</ServiceItem>
            </li>
            <li className="border border-go-gray">
              <ServiceItem href="#">WordPress</ServiceItem>
            </li>
            <li className="border border-go-gray">
              <ServiceItem href="#">Email & Microsoft 365</ServiceItem>
            </li>
            <li className="border border-go-gray">
              <ServiceItem href="#">Website Design Services</ServiceItem>
            </li>
            <li className="border border-go-gray">
              <ServiceItem href="#">Online Store</ServiceItem>
            </li>
            <li className="border border-go-gray">
              <ServiceItem href="#">Web Hosting</ServiceItem>
            </li>
            <li className="border border-go-gray col-start-5 row-start-1 row-span-2 flex items-center">
              <div className="w-full">
                <ServiceItem href="#">
                  <div>
                    <span className="font-bold text-4xl">.Shop</span>
                    <p className="font-normal text-sm mt-2">
                      Sale $0.99<sup>*</sup>/1st yr.
                    </p>
                    <p className="font-normal text-sm mt-2">
                      Attract shoppers. Sell more stuff
                    </p>
                  </div>
                </ServiceItem>
              </div>
            </li>
          </ul>
        </section>
      </Content>
    </section>
  );
}
