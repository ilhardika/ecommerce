import React from "react";
import Logo from "./Logo";
import { heeaderData } from "@/constant/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl text-white/80 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green gap-6 flex flex-col">
        <div className="flex items-center justify-between">
          <Logo className="text-white" />
          <button onClick={onClose} className="hover:text-shop_light_green">
            X
          </button>
        </div>

        <div className="pt-5 flex space-y-3.5 flex-col gap-2 tracking-wide text-white/80 ">
          {heeaderData.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className={cn(
                `hover:text-shop_light_green hoverEffect ${
                  pathname === item.link && "text-shop_light_green"
                }`
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
