import { links } from "@/lib/links";
import Link from "next/link";

export default function LinkDesktop() {
  return (
    <div className="hidden text-white w-full lg:flex gap-x-[5rem] justify-center items-center">
    {links.map((link) => {
      const {ref, label} = link;
      return <Link href={ref} key={label} > {label} </Link>
    })}
  </div>
  )
}
