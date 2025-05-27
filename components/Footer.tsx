import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText } from "./ui/text";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Shoppy is your one-stop online shop for the latest trends in
              fashion, electronics, and more. Enjoy a seamless shopping
              experience with fast delivery and top-notch customer service.
            </SubText>
            <SocialMedia iconClassName="hover:bg-shop_dark_green" />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
