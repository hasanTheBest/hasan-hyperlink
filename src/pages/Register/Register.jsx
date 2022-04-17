import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "./Loading";

const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  // router
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleRegister = (e) => {
    e.preventDefault();
    const [email, password] = [
      emailRef.current.value,
      passwordRef.current.value,
    ];

    if (!emailRef) {
      emailRef.current.focus();
      return;
    }

    if (!passwordRef) {
      passwordRef.current.focus();
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    return navigate(from, { replace: true });
  }

  return (
    <section className="min-h-screen bg-emerald-50 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 border-emerald-800 max-w-xl mx-auto">
        <h2 className="text-3xl text-center font-semibold text-emerald-800 mb-8">
          Register
        </h2>
        <form className="font-medium mb-4" onSubmit={handleRegister}>
          {/* Email */}
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="py-2 px-4 border shadow rounded text-emerald-700"
              placeholder="Email Address"
              ref={emailRef}
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="mb-2 text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="py-2 px-4 border shadow rounded text-emerald-700"
              placeholder="Enter Password"
              ref={passwordRef}
              required
            />
          </div>

          {error && <p className="text-rose-700 mb-2">{error.message}</p>}

          <button
            type="submit"
            className="px-4 py-2 font-semibold w-full flex justify-center gap-3 bg-emerald-800 hover:bg-emerald-700 border-0 text-emerald-100 hover:text-emerald-50 transition-all rounded mt-2"
          >
            {loading && <Loading />}
            <span>Register</span>
          </button>
        </form>

        <p className="text-gray-600">
          Already a user?{" "}
          <Link to="/login" className="text-emerald-800 font-medium">
            Login
          </Link>
        </p>

        {/* or register with */}
        <p className="relative my-4 flex justify-center items-center">
          <span className="w-1/3 bg-gray-400 h-[3px]"></span>
          <span className="px-2 text-gray-600 font-medium">
            or register with
          </span>
          <span className="w-1/3 bg-gray-400 h-[3px]"></span>
        </p>

        {/* register button */}
        <div className="flex gap-4 flex-wrap justify-between h-10">
          <button className="bg-rose-800 hover:bg-red-700 flex-grow text-red-200 hover:text-red-100 transition-all rounded shadow">
            Google
          </button>
          <button className="bg-sky-800 hover:bg-sky-700 flex-grow text-sky-200 hover:text-sky-100 transition-all rounded shadow">
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
