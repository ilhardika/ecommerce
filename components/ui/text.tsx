import { cn } from "@/lib/utils"; // Adjust the import path as needed

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={cn(
        "text-3xl font-bold text-shop_btn_dark_green capitalize tracking-wide font-sans",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
