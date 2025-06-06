import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className? : string }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
        className
      )}
    >
      <h2>
        <span className="text-shop_light_green group-hover:text-shop_dark_green hoverEffect">
          S
        </span>
        hoppy
      </h2>
    </Link>
  );
};

export default Logo;
