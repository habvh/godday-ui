import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { Content } from "./Content";
import Input from "./Input";
import { GoDaddyIcon } from "./icons/Godaddy";
import { Button } from "./Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const descriptions = [
  {
    title: "About GoDaddy",
    data: [
      "About Us",
      "Newsroom",
      "Investor Relations",
      "Careers",
      "Corporate Responsibility",
      "Trust Center",
      "Legal",
    ],
  },
  {
    title: "Help Center",
    data: [
      "Help Center",
      "Community",
      "Venture Forward: Microbusiness Data",
      "GoDadday Blog",
      "Contact Us",
      "Report Abuse",
      "Resources",
    ],
  },
  {
    title: "Resources",
    data: [
      "Webmail",
      "WHOIS",
      "GoDaddy Mobile App",
      "ICANN Comfirmation",
      "Designers & Developers",
      "Corporate Domains",
      "Redeem Code",
      "Product Catalog",
      "Videos",
      "Business Name Generator",
    ],
  },
  {
    title: "Shopping",
    data: [
      "Buy a Domain",
      "Websites",
      "WordPress",
      "Hosting",
      "Web Security",
      "Email & Office",
      "Phone Numbers",
      "Promos",
    ],
  },
  {
    title: "Partner Programs",
    data: ["Affiliates", "Reseller Programs", "GoDaddy Pro"],
  },
  {
    title: "Account",
    data: ["My Products", "Renewals & Billing", "Create Account"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-go-black text-go-white ">
      <Content className="py-4 xl:py-10 border-b border-red-go-gray">
        <section className="flex w-full flex-col lg:flex-row justify-between gap-8 xl:gap-20">
          <div className="w-full lg:w-1/2 self-start">
            <p className="mb-4 text-sm lg:text-base">
              Sign up for news and special offers
            </p>
            <Input
              placeholder="Email address"
              textButton="Sign Up"
              isDarkMode
            />
          </div>
          <div className="w-full lg:w-1/2 self-start">
            <p className="mb-4 text-sm lg:text-base">
              We love taking your call
            </p>
            <div>
              <a
                href="https://www.godaddy.com/vi-vn"
                target="_blank"
                className="flex items-center"
              >
                <GoDaddyIcon className="w-32 xl:w-52 fill-white	" />
                <p className="text-xl xl:text-4xl font-thin pl-2">guides</p>
              </a>
            </div>
          </div>
        </section>
      </Content>
      <Content className="py-10 border-b border-red-go-gray">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:flex gap-4 xl:gap-10 justify-around">
          {descriptions.map((item) => (
            <div>
              <h4 className="font-bold lg:text-lg pb-2 lg:pb-4">
                {item.title}
              </h4>
              <ul className="flex flex-col gap-2 lg:gap-4 text-sm text-gray-400">
                {item.data.map((e) => (
                  <li>
                    <a href="#">{e}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center pt-8">
          <div className="flex gap-2 text-sm lg:text-lg lg:gap-4 items-center">
            <div>
              <a
                href="https://www.godaddy.com/vi-vn"
                target="_blank"
                className="flex items-center"
              >
                <GoDaddyIcon className="w-24 xl:w-40 fill-white	" />
              </a>
            </div>
            <Button isDefaultStyle={false} icon={<IoIosArrowUp />}>
              United States - English
            </Button>
            <Button isDefaultStyle={false} icon={<IoIosArrowUp />}>
              USD
            </Button>
          </div>
          <div className="flex gap-2 lg:gap-4">
            <IoLogoFacebook className="w-4 h-4 lg:w-8 lg:h-8" />
            <IoLogoInstagram className="w-4 h-4 lg:w-8 lg:h-8" />
            <IoLogoTwitter className="w-4 h-4 lg:w-8 lg:h-8" />
            <IoLogoYoutube className="w-4 h-4 lg:w-8 lg:h-8" />
          </div>
        </div>
      </Content>
      <Content className="pt-8 pb-14 font-medium flex flex-col text-sm gap-4">
        <div className="flex flex-col lg:flex-row gap-2">
          <p className="basis-9/12 ext-gray-300 ">
            Copyright © 1999 - 2023 GoDaddy Operating Company, LLC. All rights
            reserved. The term GoDaddy is a registered trademark of GoDaddy
            Operating Company, LLC in the United States and other countries. The
            “GO” logo is a registered trademark of GoDaddy.com, LLC in the
            United States.
          </p>
          <div className="flex gap-6 text-gray-400 flex-1 justify-center lg:justify-end">
            <span>Legal</span>
            <span>Privacy Policy</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <p className="basis-9/12 text-gray-300">
            Use of this Site is subject to the express terms of use. By using
            this site, you acknowledge your agreement to be bound by these
            <span className="text-go-jade"> General Terms of Service</span>.
          </p>
          <p className="flex text-gray-400 flex-1 justify-center lg:justify-end">
            Do not sell my personal information
          </p>
        </div>
      </Content>
    </footer>
  );
}
