import React from "react";
import Logo from "./Logo";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl text-white/80 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green gap-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <Logo className="text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
