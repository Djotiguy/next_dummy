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
      <DropdownMenuContent className="lg:hidden" align="start" sideOffset={10}>
        {links.map((link) => {
          const { ref, label } = link;
          return (
            // eslint-disable-next-line react/jsx-key
            <DropdownMenuItem>
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
