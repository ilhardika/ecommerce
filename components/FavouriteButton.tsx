import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const FavouriteButton = () => {
  return (
    <div>
      <Link href={"/cart"} className="group relative">
        <Heart className="size-5 hover:text-shop_light_green hoverEffect" />
        <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white size-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          0
        </span>
      </Link>
    </div>
  );
};

export default FavouriteButton;
