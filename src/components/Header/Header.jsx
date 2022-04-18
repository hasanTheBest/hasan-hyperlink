import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <header className="bg-emerald-900 px-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-start text-emerald-100">
        {/* logo */}
        <Link
          to="/"
          className="text-emerald-100 text-2xl font-semibold tracking-wide flex gap-2 items-center bg-emerald-800 p-1 px-3 rounded mt-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span>HHH</span>
        </Link>

        {/* menu */}
        <div
          className={`relative bg-emerald-800 lg:flex lg:bg-emerald-900 flex-grow lg:flex-row mt-12 lg:mt-0 shadow-lg  transition-all ${
            !openMenu ? "hidden" : ""
          }`}
        >
          <div className="text-emerald-100 flex flex-col lg:flex-row lg:flex-grow gap-2 lg:items-center text-center lg:justify-center font-semibold">
            <CustomLink
              to="/"
              className="py-3 px-5 hover:bg-emerald-700 transition-all"
            >
              Home
            </CustomLink>
            <CustomLink
              to="/about"
              className="py-3 px-5 hover:bg-emerald-700 transition-all"
            >
              About
            </CustomLink>
            <CustomLink
              to="/checkout"
              className="py-3 px-5 hover:bg-emerald-700 transition-all"
            >
              Checkout
            </CustomLink>
            <CustomLink
              to="/blog"
              className="py-3 px-5 hover:bg-emerald-700 transition-all"
            >
              Blog
            </CustomLink>
          </div>

          {/* login/logout */}
          <hr className="w-1/2 mx-auto lg:hidden h-1 bg-emerald-700 text-emerald-700 my-4" />

          <div className="flex gap-2 justify-center">
            {user ? (
              <div className="flex items-center">
                <button
                  className="p-3 flex justify-center gap-2 text-emerald-100 hover:bg-emerald-800 transition-all"
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Logout</span>
                </button>

                {/* userThumb */}
                {user.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt={user?.displayName || user.email}
                    title={user?.displayName || user.email}
                  />
                ) : (
                  <span className="w-10 h-10 text-xl font-medium text-emerald-100 flex items-center justify-center rounded-full bg-emerald-700">
                    {user.email.slice(0, 1).toUpperCase()}
                  </span>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="p-3 flex items-center text-emerald-100 gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>

        {/* toggle menu */}
        <button
          className="p-1 rounded shadow border lg:hidden border-emerald-100 mt-1"
          onClick={toggleMenu}
        >
          {openMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
