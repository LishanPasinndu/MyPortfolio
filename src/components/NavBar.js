import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
        h-[1px] inline-block bg-dark dark:bg-light
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark  my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
        h-[1px] inline-block bg-light dark:bg-dark
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isOpen);
  };

  return (
    <div className="justify-center items-center">
      <div className="justify-center items-center w-full ">
        <br />
        <header
          className=" w-auto mx-6 px-32 py-7 relative font-semibold bg-stone-100 dark:text-light dark:border-light
         dark:bg-dark  rounded-full border-4 lg:border-solid 
         lg:border-dark md:border-0 sm:border-0 lg:border-0 xs:border-0 hover:bg-stone-200 flex items-center justify-between text-lg"
        >
          <button
            className="fixed top-15 left-12 flex-col justify-center items-start hidden lg:flex"
            onClick={handleClick}
          >
            <span
              className={`bg-dark dark:bg-light blobk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              } `}
            ></span>
            <span
              className={`bg-dark dark:bg-light blobk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-dark dark:bg-light blobk transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              } `}
            ></span>
          </button>

          <div className="w-full flex justify-between items-center lg:hidden">
            <nav>
              <CustomLink href="/" title="Home" className="mr-4" />
              <CustomLink href="/about" title="About" className="mx-4" />
              <CustomLink href="/project" title="Projects" className="mx-4" />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
              <motion.a
                href="/"
                target="_blank"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="/"
                target="_blank"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="/"
                target="_blank"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="/"
                target="_blank"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 bg-light rounded-full"
              >
                <PinterestIcon />
              </motion.a>
              <motion.a
                href="/"
                target="_blank"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3"
              >
                <DribbbleIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className=" flex items-center justify-center rounded-full p-1 "
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </div>

          {isOpen ? (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: "-50", y: "-50" }}
              animate={{ scale: 1, opacity: 1 }}
              className=" min-w-[70vw]
  flex flex-col justify-between  z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
   bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
            >
              <nav className="flex items-center flex-col justify-center">
                <CustomMobileLink
                  href="/"
                  title="Home"
                  className=""
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/about"
                  title="About"
                  className=""
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/project"
                  title="Projects"
                  className=""
                  toggle={handleClick}
                />
              </nav>

              <nav className="flex items-center justify-center flex-wrap mt-2">
                <motion.a
                  href="/"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3 sm:mx-1"
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a
                  href="/"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3  bg-light rounded-full dark:bg-dark sm:mx-1"
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href="/"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3 sm:mx-1"
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  href="/"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3 bg-light rounded-full sm:mx-1"
                >
                  <PinterestIcon />
                </motion.a>
                <motion.a
                  href="/"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3 sm:mx-1"
                >
                  <DribbbleIcon />
                </motion.a>

                <button
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  className=" flex items-center justify-center rounded-full p-1 "
                >
                  {mode === "dark" ? (
                    <SunIcon className={"fill-dark"} />
                  ) : (
                    <MoonIcon className={"fill-dark"} />
                  )}
                </button>
              </nav>
            </motion.div>
          ) : null}

          <div className="absolute left-[50%] justify-center mb-1 translate-x-[-50%]">
            <Logo />
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
