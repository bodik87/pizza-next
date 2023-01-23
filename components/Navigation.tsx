"use client";
import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { categories } from "../data/data";
import Image from "next/image";
import Layout from "./Layout";
import { Link as ScrollLink } from "react-scroll";

type Props = {};

export default function Navigation({}: Props) {
  const { scrollY } = useScroll();
  const [left, setLeft] = useState(-56);
  const [shadow, setShadow] = useState("none");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 85) {
      setLeft(0);
      setShadow("0px 7px 18px -6px rgba(34, 60, 80, 0.2)");
    } else {
      setLeft(-56);
      setShadow("none");
    }
  });

  return (
    <div
      className="sticky top-0 py-2 bg-white/75 shadow-lg backdrop-blur-xl transition-all z-10"
      style={{ boxShadow: shadow }}
    >
      <Layout>
        <div className="py-5 overflow-hidden relative">
          <div
            className="absolute top-0 -left-14 flex items-center gap-5 transition-all"
            style={{ left }}
          >
            <Image src="/icon.svg" alt="Logo" width={36} height={36} priority />
            {categories.map((category, i) => (
              <ScrollLink
                className="font-semibold cursor-pointer"
                activeClass="activeItem"
                smooth
                offset={-90}
                spy
                to={category.id}
                key={category.id}
              >
                {category.title}
              </ScrollLink>
            ))}
            {/* <ScrollLink
              className="font-semibold cursor-pointer"
              activeClass="activeItem"
              smooth
              offset={-80}
              spy
              to={categories[0].id}
            >
              {categories[0].title}
            </ScrollLink>

            <ScrollLink
              className="font-semibold cursor-pointer"
              activeClass="activeItem"
              smooth
              offset={-100}
              spy
              to={categories[1].id}
            >
              {categories[1].title}
            </ScrollLink> */}
          </div>
        </div>
      </Layout>
    </div>
  );
}
