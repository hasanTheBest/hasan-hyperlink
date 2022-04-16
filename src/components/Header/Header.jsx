import React from "react";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <header className="bg-emerald-900 px-4">
      <nav className="max-w-6xl mx-auto shadow flex items-center justify-between">
        <h4 className="text-slate-200 text-3xl font-semibold tracking-wide">
          HHH
        </h4>

        <div className="text-slate-200 flex">
          <CustomLink to="/" className="py-3 px-5 mx-2 hover:bg-slate-800">
            Home
          </CustomLink>
          <CustomLink to="/about" className="py-3 px-5 mx-2 hover:bg-slate-800">
            About
          </CustomLink>
          <CustomLink
            to="/checkout"
            className="py-3 px-5 mx-2 hover:bg-slate-800"
          >
            Checkout
          </CustomLink>
          <CustomLink to="/blog" className="py-3 px-5 mx-2 hover:bg-slate-800">
            Blog
          </CustomLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
