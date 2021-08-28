import React, { Suspense } from "react";
import Image from "next/image";
import LinkButton from "./LinkButton";
import { Link } from "./Link";
import Linus from "../assets/linus2.jpg"

interface Props {
  mainheader: string;
  links: Array<Link>;
  iconURL: string;
}

const Card: React.FC<Props> = ({ mainheader, links, iconURL }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center h-screen border-4 dark:border-white border-black md:h-screen rounded-lg dark:text-white text-black ">
        <div className="md:flex md:flex-row md:pt-40 pt-20">
          <div className="flex flex-col justify-center items-center  md:flex md:flex-cols md:justify-center md:items-center md:pl-36">
            <Image
              className="rounded-full"
              src={iconURL}
              alt="Some asshole's profile pic"
              width={210}
              height={210}
              placeholder="blur"
            />
          </div>

          <h1 className="flex flex-col text-center justify-center items-center pt-10 pb-10 md:pb-0 md:pt-0 md:flex md:flex-cols md:pl-14 md:justify-center md:items-center  text-3xl md:text-7xl font-regular">
            {mainheader}
          </h1>
        </div>
        <div className="md:flex md:flex-row md:justify-center md:pr-40 md:pt-5 text-4xl ">
          <ul className="flex flex-row flex-wrap justify-center md:flex md:flex-row ">
            {links.map((link, idx) => (
              <li key={idx} className="p-5 md:px-5">
                <LinkButton name={link.name} link={link.url} icon={link.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
