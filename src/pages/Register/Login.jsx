import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  // let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    if (true) {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    }
  }

  return (
    <section className="h-screen bg-emerald-50 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6 border-emerald-800 max-w-xl mx-auto">
        <h2 className="text-3xl text-center font-semibold text-emerald-800 mb-8">
          Login
        </h2>
        <form className="font-medium mb-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="py-2 px-4 border shadow rounded text-emerald-700"
              required
              placeholder="Email Address"
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
              required
              placeholder="Enter Password"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-semibold w-full bg-emerald-800 hover:bg-emerald-700 border-0 text-emerald-100 hover:text-emerald-50 transition-all rounded mt-2"
          >
            Submit
          </button>
        </form>

        <p className="text-gray-500 mb-2">
          Forget Password?{" "}
          <button className="text-emerald-800 font-medium">
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
          <span className="px-2 text-gray-600 font-medium">or login with</span>
          <span className="w-1/3 bg-gray-400 h-[3px]"></span>
        </p>

        {/* login button */}
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
}

export default Login;
