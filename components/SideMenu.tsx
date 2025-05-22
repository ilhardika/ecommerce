import React from "react";
import Logo from "./Logo";
import { heeaderData } from "@/constant/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import SocialMedia from "./SocialMedia";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();

  // Handler sederhana untuk overlay click
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Jika yang diklik adalah elemen yang sama dengan yang memiliki event handler
    // berarti user mengklik background/overlay, bukan menu
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl text-white/80 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
      onClick={handleBackdropClick}
    >
      <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green gap-6 flex flex-col">
        {/* Menu content tetap sama */}
        <div className="flex items-center justify-between">
          <Logo className="text-white" />
          <button onClick={onClose} className="hover:text-shop_light_green">
            X
          </button>
        </div>

        <div className="pt-5 flex space-y-3.5 flex-col gap-1 tracking-wide text-white/80 ">
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

        <div className="pt-3">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
