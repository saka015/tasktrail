import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignInButton>
        <UserButton />
      </SignInButton>
    </div>
  );
};

export default Header;
