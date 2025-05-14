import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s - Shoppy",
    default: "Shopcart online store",
  },
  description: "Shopcart online store, a exclusive e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
