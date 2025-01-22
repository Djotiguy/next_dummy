import spaceImage from "@/public/assets/imgs/rocket_midjourney.jpeg";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Header(): ReactNode {
  return (
    <header className=" bg-black">
      <div className="align-element grid grid-cols-2 md:grid-cols-3 p-2">
        <Link href='/' className="justify-self-start self-center">
          <h1 className="dancing-font text-white pt-2 tracking-[0.8rem]">Dummy</h1>
        </Link>
        <Link href='/' className="justify-self-end self-center md:justify-self-center">
          <Image src={spaceImage} alt="home_logo" className="h-12 w-12 object-cover" />
        </Link>
      </div>
    </header>
  )
}
