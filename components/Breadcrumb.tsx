"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Category from "./Category";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Breadcrumb = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="z-10 w-full max-w-5xl gap-5  font-mono text-sm flex">
      {pathname.split("/").map(
        (path, index) =>
          path && (
            <Link key={path} href={`${pathname.split(path)[0]}${path}`}>
              <Image
                alt={path}
                src={`/assets/${path}.webp`}
                width={100}
                height={100}
              />
            </Link>
          )
      )}
    </nav>
  );
};

export default Breadcrumb;
