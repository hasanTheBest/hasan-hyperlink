import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <header className="bg-emerald-900 px-4">
      <nav className="max-w-6xl mx-auto shadow flex items-center justify-between">
        <h4 className="text-slate-200 text-3xl font-semibold tracking-wide">
          HHH
        </h4>

        <div className="text-slate-200 flex">
          <CustomLink to="/" className="py-3 px-5 hover:bg-slate-800">
            Home
          </CustomLink>
          <CustomLink to="/about" className="py-3 px-5 hover:bg-slate-800">
            About
          </CustomLink>
          <CustomLink to="/checkout" className="py-3 px-5 hover:bg-slate-800">
            Checkout
          </CustomLink>
          <CustomLink to="/blog" className="py-3 mx-2 hover:bg-slate-800">
            Blog
          </CustomLink>
        </div>

        {/* login/logout */}
        <div>
          {user ? (
            <div className="flex items-center">
              <button
                className="p-3 flex justify-center gap-2 text-emerald-100"
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
      </nav>
    </header>
  );
};

export default Header;
