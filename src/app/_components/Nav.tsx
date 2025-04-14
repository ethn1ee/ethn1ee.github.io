"use client";

import logo from "@/../public/logo.svg";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

import toTitle from "@/lib/toTitle";
import { myEasing } from "./Easing";
import NoiseBG from "./NoiseBG";
import LinkButton from "./LinkButton";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Nav = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ top: -60 }}
        animate={{
          top: 0,
        }}
        exit={{ top: -60 }}
        transition={{ duration: 0.8, ease: myEasing }}
        className="fixed left-0 z-50 flex h-[60px] w-screen items-center justify-between border-b border-gray-300 bg-black p-4 sm:pr-10 sm:pl-16"
      >
        <NoiseBG />

        {/* BREADCRUMB */}
        <div className="flex items-center gap-3 leading-none tracking-tight text-gray-300">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={16}
              height={16}
              className="text-gray-300 opacity-40"
            />
          </Link>
          <span>/</span>
          <AnimatePresence>
            {pathNames.map((path, index) => (
              <Fragment key={index}>
                <motion.span
                  key={path}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: myEasing, duration: 0.3 }}
                >
                  {toTitle(path)}
                  {index !== pathNames.length - 1 && (
                    <span className="ml-3">/</span>
                  )}
                </motion.span>
              </Fragment>
            ))}
          </AnimatePresence>
        </div>

        {/* LINKS */}
        <div className="ml-auto hidden md:block">
          <HorizontalLinks />
        </div>
        <div
          onClick={() => setExpanded(!expanded)}
          className="ml-auto block md:hidden"
        >
          <Bars3Icon className="cursor-pointer text-white size-6" />
          <AnimatePresence>{expanded && <VerticalLinks />}</AnimatePresence>
        </div>
      </motion.nav>
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
        <LinkButton href="/projects">PROJECTS</LinkButton>
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
        "absolute top-[60px] right-0 z-10 flex w-screen flex-col items-end gap-10 bg-linear-to-b from-black to-transparent px-4 pt-10 pb-40 font-mono leading-none tracking-tight text-gray-200"
      }
    >
      <li>
        <LinkButton href="/" animate={false}>
          HOME
        </LinkButton>
      </li>
      <li>
        <LinkButton href="/projects" animate={false}>
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
