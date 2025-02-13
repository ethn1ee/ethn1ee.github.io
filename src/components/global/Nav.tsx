"use client";

import LinkButton from "@/components/global/LinkButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

import { myEasing } from "./Easing";
import NoiseBG from "./NoiseBG";

const Nav = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const isLanding = pathNames.length === 0;

  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <AnimatePresence>
      {!isLanding && (
        <motion.nav
          initial={{ top: -60 }}
          animate={{
            top: 0,
          }}
          exit={{ top: -60 }}
          transition={{ duration: 0.8, ease: myEasing }}
          className="fixed left-0 z-50 flex h-[60px] w-screen items-center justify-between border-b border-gray-300 bg-black p-4 sm:pl-16 sm:pr-10"
        >
          <NoiseBG />

          {/* BREADCRUMB */}
          <div className="pointer-events-none hidden gap-3 leading-none tracking-tight text-gray-300 md:flex">
            <span>TAEHOON LEE</span>
            <span>/</span>
            {pathNames.map((path, index) => (
              <Fragment key={index}>
                <span>{path.toUpperCase()}</span>
                {index !== pathNames.length - 1 && <span>/</span>}
              </Fragment>
            ))}
          </div>

          {/* LINKS */}
          <div className="ml-auto hidden md:block">
            <HorizontalLinks />
          </div>
          <div
            onClick={() => setExpanded(!expanded)}
            className="ml-auto block md:hidden"
          >
            <MenuIcon className="cursor-pointer" />
            <AnimatePresence>{expanded && <VerticalLinks />}</AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

const HorizontalLinks = () => {
  return (
    <ul
      className={
        "flex flex-row gap-10 font-mono leading-none tracking-tight text-gray-200"
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
  );
};

const VerticalLinks = () => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: myEasing }}
      className={
        "absolute right-0 top-[60px] z-10 flex w-screen flex-col items-end gap-10 bg-gradient-to-b from-black to-transparent px-4 pb-40 pt-10 font-mono leading-none tracking-tight text-gray-200"
      }
    >
      <li>
        <LinkButton href="/" animate={false}>
          HOME
        </LinkButton>
      </li>
      <li>
        <LinkButton href="/#projects" animate={false}>
          PROJECTS
        </LinkButton>
      </li>
      <li>
        <LinkButton href="https://github.com/ethn1ee" animate={false}>
          GITHUB
        </LinkButton>
      </li>
      <li>
        <LinkButton
          href="https://www.linkedin.com/in/taehoon-ethan-lee/"
          animate={false}
        >
          LINKEDIN
        </LinkButton>
      </li>
    </motion.ul>
  );
};

export default Nav;
