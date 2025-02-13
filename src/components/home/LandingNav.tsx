"use client";

import LinkButton from "../global/LinkButton";

const Nav = () => {
  return (
    <nav className="z-10 mx-4 mb-2 flex h-full flex-col-reverse justify-between gap-6 pt-6 sm:ml-16 sm:mr-10 sm:h-fit sm:flex-row">
      <p
        className={
          "font-playfair text-3xl font-bold italic leading-none text-gray-200"
        }
      >
        Creative Developer
      </p>
      <ul
        className={
          "flex justify-between gap-10 font-mono leading-none tracking-tight text-gray-200 sm:justify-end"
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
