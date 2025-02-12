"use client";

import { fonts } from "../global/Fonts";
import LinkButton from "../global/LinkButton";

const Nav = () => {
  return (
    <nav className="z-10 mb-2 ml-16 mr-10 flex justify-between">
      <p
        className={
          fonts.playfair.className +
          " text-3xl font-bold italic leading-none text-gray-200"
        }
      >
        Creative Developer
      </p>
      <ul
        className={
          fonts.mono.className +
          " flex gap-10 leading-none tracking-tight text-gray-200"
        }
      >
        <li>
          <LinkButton href="#projects">PROJECTS</LinkButton>
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
