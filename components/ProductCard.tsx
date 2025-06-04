import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToWishlistButton from "./AddToWishlistButton";
import { Title } from "./ui/text";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border-[1px] border-dark_blue/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.images && (
          <Image
            src={urlFor(product.images[0]).url()}
            alt="ProductImage"
            loading="lazy"
            width={700}
            height={700}
            className={`w-full h-64 object-contain overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-in-out ${product?.stock === 0 && "opacity-0"}`}
          />
        )}
        <AddToWishlistButton product={product} />
        {(product?.status === "sale" || product?.status === "new") && (
          <p
            className={`absolute top-2 left-2 z-10 text-xs border px-2 rounded-full group-hover:border-shop_light_green hoverEffect group-hover:text-shop_light_green hoverEfffect ${
              product?.status === "sale"
                ? "border-darkColor/50"
                : "border-darkColor/50 group-hover:border-blue-500 group-hover:text-blue-500"
            }`}
          >
            {product?.status === "sale" ? "Sale!" : "New!"}
          </p>
        )}
        {product?.status === "hot" && (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hoverEffect"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
            />
          </Link>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="uppercase line-clamp-1 text-sm text-gray-500">
          {product?.categories?.map((cat) => cat).join(", ")}
        </p>
        <Title className="text-sm line-clamp-1">{product?.name}</Title>
        <div>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((index) => (
              <StarIcon
                key={index}
                size={13}
                className={
                  index < 4
                    ? "text-green-500 fill-green-500"
                    : "text-gray-400 fill-gray-400"
                }
              />
            ))}
            <span className="text-xs ml-1 text-gray-400">7 Reviews</span>
          </div>
          <p className="mt-2">
            In Stock{" "}
            {(product?.stock as number) > 0 ? product.stock : "unavailable"}
          </p>
          <PriceView price={product.price} discount={product.discount} />
          <AddToCartButton product={product} className="w-36 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
