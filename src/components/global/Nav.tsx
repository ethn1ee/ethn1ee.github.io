"use client";

import { fonts } from "@/components/global/Fonts";
import LinkButton from "@/components/global/LinkButton";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const Nav = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <nav className="z-10 flex h-[60px] items-center justify-between border-b border-gray-300 pl-16 pr-10">
      <div className="flex gap-3 leading-none tracking-tight text-gray-300">
        <span>TAEHOON LEE</span>
        <span>/</span>
        {pathNames.map((path, index) => (
          <Fragment key={index}>
            <span>{path.toUpperCase()}</span>
            {index !== pathNames.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </div>
      <ul
        className={
          fonts.mono.className +
          " flex gap-10 leading-none tracking-tight text-gray-200"
        }
      >
        <li>
          <LinkButton href="/">HOME</LinkButton>
        </li>
        <li>
          <LinkButton href="/#projects">PROJECTS</LinkButton>
        </li>
        <li>
          <LinkButton href="https://github.com/ethn1ee">GITHUB</LinkButton>
        </li>
        <li>
          <LinkButton href="https://www.linkedin.com/in/taehoon-ethan-lee/">
            LINKEDIN
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
