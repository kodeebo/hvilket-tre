import Category from "@/components/Category";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-around font-mono text-sm flex flex-wrap">
      <Category
        href="/leaf/simple"
        alt="smooth"
        src="/assets/simple.webp"
        name="Glatt bladkant"
      />
      <Category
        href="/leaf/multiple"
        alt="multiple"
        src="/assets/multiple.webp"
        name="Samensatt bladkant"
      />
    </div>
  );
};

export default page;
