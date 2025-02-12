"use client";

import { fonts } from "@/components/global/Fonts";
import LinkButton from "@/components/global/LinkButton";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { myEasing } from "./Easing";

const Nav = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const isLanding = pathNames.length === 0;

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
          className="absolute left-0 z-10 flex h-[60px] w-screen items-center justify-between border-b border-gray-300 pl-16 pr-10"
        >
          {/* BREADCRUMB */}
          <div className="pointer-events-none flex gap-3 leading-none tracking-tight text-gray-300">
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Nav;
