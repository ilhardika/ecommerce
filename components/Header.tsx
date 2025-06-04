import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import FavouriteButton from "./FavouriteButton";
import CartIcon from "./CartIcon";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton, SignedIn, ClerkLoaded } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();
  console.log("Current User:", user);

  return (
    <header className="bg-white/70 sticky top-0 z-50 backdrop-blur-md py-5">
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className="flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavouriteButton />

          <ClerkLoaded>
            {/* Jika pengguna sudah masuk (SignedIn), tampilkan tombol UserButton */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            {/* Jika tidak ada user, tampilkan komponen SignIn */}
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
