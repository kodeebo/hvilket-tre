import Category from "@/components/Category";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="z-10 w-full max-w-5xl justify-around font-mono text-sm flex flex-wrap">
      <Category
        src="/assets/needle.webp"
        alt="needle"
        href="/needle"
        name="Barnål"
      />
      <Category
        src="/assets/leaf.webp"
        alt="leaf"
        href="/leaf"
        name="Løvtrær"
      />
    </div>
  );
}
