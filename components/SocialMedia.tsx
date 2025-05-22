import { Github, Linkedin, Phone } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialLinks = [
  {
    title: "Linkedin",
    icon: <Linkedin className="size-5" />,
    href: "https://www.linkedin.com/in/ilhamhardika/",
  },
  {
    title: "Github",
    icon: <Github className="size-5" />,
    href: "https://github.com/ilhardika/",
  },
  {
    title: "Whatapp",
    icon: <Phone className="size-5" />,
    href: "https://api.whatsapp.com/send/?phone=62822322113122&text&type=phone_number&app_absent=0",
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-4", className)}>
        {SocialLinks?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect flex items-center justify-center w-10 h-10",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
