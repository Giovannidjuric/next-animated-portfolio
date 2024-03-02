"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const topVariant = {
    open: { backgroundColor: "rgb(255, 255, 255)", rotate: -45 },
    closed: { backgroundColor: "rgb(0, 0, 0)" },
  };

  const middleVariant = {
    open: { opacity: 0 },
    closed: { opacity: 1, backgroundColor: "rgb(0, 0, 0)" },
  };

  const bottomVariant = {
    open: { backgroundColor: "rgb(255, 255, 255)", rotate: 45 },
    closed: { backgroundColor: "rgb(0, 0, 0)" },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between h-full px-4 sm:px-8 md:px-12 lg:px-48">
      <div className="hidden w-1/3 gap-4 md:flex">
        {links.map((link) => (
          <NavLink link={link} key={link.url}></NavLink>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="flex items-center justify-center h-full p-1 font-semibold bg-black rounded-md"
        >
          <span className="mr-1 text-white">Gio</span>
          <span className="flex items-center justify-center w-12 h-8 text-black bg-white rounded">
            .dev
          </span>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="flex justify-center w-1/3">
        <div className="hidden gap-4 md:flex">
          <Link href="#">
            <Image alt="Github logo" src="/github.png" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image alt="" src="/dribbble.png" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image alt="" src="/instagram.png" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image alt="" src="/facebook.png" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image alt="" src="/pinterest.png" width={24} height={24} />
          </Link>
          <Link href="#">
            <Image alt="" src="/linkedin.png" width={24} height={24} />
          </Link>
        </div>
        {/* MENU  BUTTON */}
        <button
          className="relative z-50 flex flex-col justify-between w-10 h-8 md:hidden "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "open" : "closed"}
            className={`w-10 h-1 rounded origin-right`}
          ></motion.div>
          <motion.div
            variants={middleVariant}
            animate={open ? "open" : "closed"}
            className={`w-10 h-1 rounded`}
          ></motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? "open" : "closed"}
            className={`w-10 h-1 rounded origin-right`}
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
