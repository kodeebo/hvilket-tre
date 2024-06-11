"use client";

import React from "react";
import MovingImage from "./MovingImage";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const roboto = Roboto_Mono({ subsets: ["latin"] });

type Props = {
  href: string;
  src: string;
  alt: string;
  name?: string;
  size: "large" | "small";
};

const Category = ({ href, src, alt, name, size = "large" }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);
  return (
    <Link href={href} className="flex flex-col justify-between h-full gap-2">
      <h2 className={roboto.className}>{name}</h2>
      <MovingImage
        src={src}
        width={size === "large" ? 300 : 100}
        height={size === "large" ? 300 : 100}
        alt={alt}
      />
    </Link>
  );
};

export default Category;
