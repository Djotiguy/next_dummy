import { links } from "@/lib/links";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";

const LinkMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden" >
        <Button variant="outline" size="icon">
          <AlignLeft size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent key={"A"} className="lg:hidden" align="start" sideOffset={10}>
        {links.map((link) => {
          const { ref, label } = link;
          return (
             
            <DropdownMenuItem key={label}>
              <Link
                href={ref}
                key={label}>
                {label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinkMobile;
