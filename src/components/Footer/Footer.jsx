import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-100 text-center p-3 font-medium">
      &copy;{" "}
      <a
        href="https://github.com/hasanTheBest"
        target="_blank"
        rel="noreferrer"
        className="text-emerald-800"
      >
        Mahmud
      </a>
      , {new Date().getFullYear()} | All rights reserved
    </footer>
  );
};

export default Footer;
