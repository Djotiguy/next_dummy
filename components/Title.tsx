import { ReactNode } from "react";

export default function Title({text}: {text: string}): ReactNode {
  return (
    <div>
        <h2 className="my-2 text-5xl capitalize">{text}</h2>
    </div>
  )
}
