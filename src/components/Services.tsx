import { Image } from "./Image";
import { Content } from "./Content";
import bgWeb from "/images/row-mrq-hp-web.webp";
import bgTable from "/images/row-mrq-hp-tablet.webp";
import bgPortrait from "/images/row-mrq-hp-portrait.webp";
import { Button } from "./Button";
import React from "react";
import Card from "./Card";

function ServiceItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <div className="group transition-all duration-200 cursor-pointer py-5 ease-in hover:bg-go-black hover:text-go-white h-full text-center flex items-center justify-center gap-4">
      <a href={href}>{children}</a>
    </div>
  );
}

function ServiceBanner() {
  return (
    <section className="grid grid-rows-1 xl:grid-cols-auto30 gap-4">
      <Image
        className="min-h-[64vw] lg:min-h-[40vw] xl:min-h-[31vw]"
        imageAlt="background"
        imageUrl="https://img1.wsimg.com/cdnassets/transform/9fe7d867-9c96-44f4-9c62-48e594446440/row-mrq-hp-landscape"
        imageSrcSets={[`${bgPortrait}`, `${bgTable} 2x`, `${bgWeb} 3x`]}
      >
        <article className="font-medium grid grid-cols-1 lg:grid-cols-2 xl:items-center h-full p-8 xl:p-10">
          <div className="flex flex-col gap-2 items-center text-center lg:text-start lg:items-start xl:gap-4">
            <div className="flex flex-col gap-2 md:gap-6 xl:gap-8">
              <p>Websites + Marketing</p>
              <p className="text-xl md:text-3xl font-serif font-bold">
                Tools for all your business firsts.
              </p>
              <p>Website and store solutions for any small business</p>
            </div>
            <div className="flex items-center gap-4">
              <Button>Get Started</Button>
              <div className="hidden lg:block">
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
        <article className="font-medium items-center h-full p-4 md:px-8 xl:p-10">
          <div className="flex flex-col xl:gap-4">
            <div className="flex flex-col gap-1 md:gap-3 xl:gap-8">
              <p>Domain Names</p>
              <p className="text-xl md:text-3xl font-medium">
                Grab a .com for just $0.01<sup>*</sup>/1st yr
              </p>
              <p>
                2-year purchase required<sup>*</sup>
              </p>
            </div>
            <div className="hidden md:block">
              <div className="my-2">
                <Button>Find Your Domain</Button>
              </div>
              <p>
                <a href="#">Transfer Your Domains</a>
              </p>
              <p className="font-normal text-sm">
                Domain include free primacy profection forever<sup>*</sup>
              </p>
            </div>
          </div>
        </article>
      </Image>
    </section>
  );
}

function ServicesTable() {
  return (
    <section className="my-4 font-medium">
      <ul className="grid grid-cols-2 grid-flow-row-dense xl:grid-cols-5 xl:grid-rows-2 border border-go-gray rounded-lg">
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
        <li className="border border-go-gray col-span-2  xl:col-start-5 xl:row-start-1 xl:row-span-2 flex items-center">
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
  );
}

function ServicesSteps() {
  return (
    <section className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:px-20 pb-8 md:py-5 xl:px-40 xl:pt-10 xl:pb-20">
      <div className="flex flex-col gap-8 sm:gap-10 lg:gap-0">
        <p className="font-serif font-bold text-2xl sm:text-4xl lg:text-5xl">
          Success in 3 easy steps
        </p>
        <Card
          className="lg:mt-96"
          imageUrl="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="image-for-step1"
          cardTitle="Save with the lowest fees"
          cardStep={2}
          cardButtonText="Start Setting Paid"
        >
          <div className="flex flex-col gap-2">
            <p>2.3% + 0c per in-person transaction</p>
            <p>2.3% + 30c per online transition</p>
            <p>
              Enjoy the lowest transaction fees compared to other leading
              providers
            </p>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-8 sm:gap-10 lg:gap-0">
        <Card
          imageUrl="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="image-for-step1"
          cardTitle="Sell online with a website"
          cardStep={1}
        >
          <p>
            Sell anything, from physical products to downloads and services, and
            manage it all in one place
          </p>
        </Card>
        <Card
          className="lg:mt-40"
          imageUrl="https://images.pexels.com/photos/7661627/pexels-photo-7661627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          imageAlt="image-for-step1"
          cardTitle="Sell in-person and on the go"
          cardStep={3}
          cardButtonText="Get Started"
        >
          <p>
            Our new Point of Sale devices are designed to fit any business and
            budget. Choose the one that's right for you
          </p>
        </Card>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <section>
      <Content>
        <ServiceBanner />
        <ServicesTable />
        <ServicesSteps />
      </Content>
    </section>
  );
}
