import Category from "@/components/Category";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="z-10 w-full max-w-5xl justify-around font-mono text-sm flex flex-wrap">
      <Category
        href="/leaf/simple/smooth"
        alt="smooth"
        src="/assets/simple.webp"
        name="Glatt bladkant"
      />
      <Category
        href="/leaf/simple/sawtooth"
        alt="sawtooth"
        src="/assets/sawtooth.webp"
        name="Sagtannet bladkant"
      />
      <Category
        href="/leaf/simple/pointy"
        alt="pointy"
        src="/assets/pointy.webp"
        name="Fliket bladkant"
      />
    </div>
  );
};

export default page;
