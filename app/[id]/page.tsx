import React from "react";
import allTrees from "@/public/trees.json";
import MovingImage from "@/components/MovingImage";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: any;
};

interface Tree {
  name: string;
  id: string;
  categories: Array<string>;
}

const getRandomImage = (images: any) =>
  images?.length && images[Math.floor(images.length * Math.random())];

const getImage = (images: any, preferred_image: number) =>
  preferred_image ? images[preferred_image] : getRandomImage(images);

const page = async ({ params }: Props) => {
  const treesOnThisLevel = allTrees.filter((tree: Tree) =>
    tree.categories.some((cat) => cat === params.id)
  );
  const result = await Promise.all(
    treesOnThisLevel.map((tree: Tree) =>
      fetch(`https://snl.no/${tree.id}.json`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())
    )
  );

  return (
    <div className={"flex flex-wrap justify-between items-center"}>
      {result.map(({ title, id, url, images, preferred_image }) => (
        <Link key={id} href={url}>
          <h2>{title}</h2>
          <Image
            src={
              getImage(images, preferred_image)?.standard_size_url ||
              getImage(images, preferred_image)?.full_size_url
            }
            width={300}
            height={400}
            className="h-auto max-w-[400px] max-h-[400px]"
            alt={title}
          />
        </Link>
      ))}
    </div>
  );
};

export default page;
