import { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [signInWithEmailAndPassword, userLogin, loadingLogin, errorLogin] =
    useSignInWithEmailAndPassword(auth);

  // Social login
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);

  // password reset email sending
  const [sendPasswordResetEmail, sendingReset, errorReset] =
    useSendPasswordResetEmail(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // Ref
  const emailRef = useRef("");
  const passwordRef = useRef("");

  // handle login with email and password
  function handleLogin(event) {
    event.preventDefault();

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

    signInWithEmailAndPassword(email, password);
  }

  // handle login with google
  const handleLoginWithGoogle = () => signInWithGoogle();

  // handle login with github
  const handleLoginWithGithub = () => signInWithGithub();

  // handle sending password reset email
  const handleResetPassword = () => {
    if (!emailRef.current.value) {
      emailRef.current.focus();
      return;
    }

    sendPasswordResetEmail(emailRef.current.value);
  };

  // if user exist go to the target page
  if (userLogin || userGoogle || userGithub) {
    navigate(from, { replace: true });
  }
  // password reset error
  if (errorReset) {
    toast.error(errorReset.message);
  }
  // password reset email sending
  if (sendingReset) {
    toast.success("Password reset email is sent.");
  }

  return (
    <>
      <section className="min-h-screen bg-emerald-50 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 border-emerald-800 max-w-xl mx-auto">
          <h2 className="text-3xl text-center font-semibold text-emerald-800 mb-8">
            Login
          </h2>
          <form className="font-medium mb-4" onSubmit={handleLogin}>
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

            {/* Error */}
            {errorLogin && (
              <p className="text-rose-700 mb-2">{errorLogin.message}</p>
            )}
            <button
              type="submit"
              className="px-4 py-2 font-semibold flex justify-center gap-3 w-full bg-emerald-800 hover:bg-emerald-700 border-0 text-emerald-100 hover:text-emerald-50 transition-all rounded mt-2"
            >
              {loadingLogin && <Loading />}
              Login
            </button>
          </form>

          <p className="text-gray-500 mb-2">
            Forget Password?{" "}
            <button
              className="text-emerald-800 font-medium"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </p>
          <p className="text-gray-600">
            Not a user?{" "}
            <Link to="/register" className="text-emerald-800 font-medium">
              Register
            </Link>
          </p>

          {/* or login with */}
          <p className="relative my-4 flex justify-center items-center">
            <span className="w-1/3 bg-gray-400 h-[3px]"></span>
            <span className="px-2 text-gray-600 font-medium">
              or login with
            </span>
            <span className="w-1/3 bg-gray-400 h-[3px]"></span>
          </p>

          {/* login button */}
          {(errorGoogle || errorGithub) && (
            <p className="mb-2 text-rose-700 font-medium">
              {errorGoogle?.message || errorGithub?.message}
            </p>
          )}
          <div className="flex gap-4 flex-wrap justify-between h-10">
            <button
              className="bg-rose-800 hover:bg-red-700 flex-grow text-red-200 hover:text-red-100 transition-all rounded shadow flex gap-2 justify-center items-center"
              onClick={handleLoginWithGoogle}
            >
              {loadingGoogle && <Loading />}
              <span>Google</span>
            </button>
            <button
              className="bg-sky-800 hover:bg-sky-700 flex-grow text-sky-200 hover:text-sky-100 transition-all rounded shadow flex gap-2 justify-center items-center"
              onClick={handleLoginWithGithub}
            >
              {loadingGithub && <Loading />}
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
}

export default Login;
