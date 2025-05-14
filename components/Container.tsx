import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
