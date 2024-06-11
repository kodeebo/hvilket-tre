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
};

const Category = ({ href, src, alt, name }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);
  return (
    <Link href={href} className="flex flex-col justify-between h-full gap-2">
      <h2 className={roboto.className}>{name}</h2>
      <MovingImage src={src} width={300} height={300} alt={alt} />
    </Link>
  );
};

export default Category;
