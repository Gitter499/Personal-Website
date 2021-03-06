import React, { useState } from "react";
import Image from "next/image";
import LinkButton from "./LinkButton";
import { Link } from "./Link";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// import your component with dynamic and disable SSR
const Tilty = dynamic(() => import("react-tilty"), { ssr: false });

interface Props {
  mainheader: string;
  links: Array<Link>;
  iconURL: string;
}

const Card: React.FC<Props> = ({ mainheader, links, iconURL }) => {
  const [rickRoll, setRickRoll] = useState(false);

  useEffect(() => {
    const chance =
      Math.floor(Math.random() * 10) == Math.floor(Math.random() * 10);
    setRickRoll(chance);
    return () => {};
  }, []);
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center h-screen w-screen border-4 dark:border-white border-black md:h-screen rounded-lg dark:text-white text-black overflow-scroll md:pt-0">
        <div className="md:flex md:flex-row md:pt-40 pt-32 ">
          <div className="flex flex-col justify-center items-center  md:flex md:flex-cols md:justify-center md:items-center md:pl-36">
            {/* @ts-ignore */}
            <Tilty max={40}>
              {!rickRoll ? (
                <Image
                  className="rounded-full"
                  src={iconURL}
                  alt="Some asshole's profile pic"
                  width={210}
                  height={210}
                  placeholder="blur"
                  loading="eager"
                />
              ) : (
                <Image
                  className="rounded-full"
                  src={"https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif?cid=ecf05e47hyo0w1b48x4qw90245vp7ppud9v160kfl10uwaf5&rid=giphy.gif&ct=g"}
                  alt="Got yo ass"
                  width={210}
                  height={210}
                  
                />
              )}
            </Tilty>
          </div>

          <h1 className="flex flex-col text-center justify-center items-center pt-5 pb-10 md:pb-0 md:pt-0 md:flex md:flex-cols md:pl-14 md:justify-center md:items-center text-3xl md:text-7xl font-regular">
            {mainheader}
          </h1>
        </div>
        <div className="mb-10 md:flex md:flex-row md:justify-center md:pr-10 md:pt-5 text-4xl ">
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
