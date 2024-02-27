"use client";

import Container from "../Container";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="fixed z-10 bg-white w-full shadow-sm">
      <div
        className="
        py-4 
      border-b-[1px]"
      >
        <Container>
          <div>
            <Logo />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
