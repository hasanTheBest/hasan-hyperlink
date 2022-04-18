import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Register/Loading";

const Checkout = () => {
  const [user, loading] = useAuthState(auth);

  let content = "";
  if (loading) {
    content = <Loading />;
  }

  if (user) {
    content = user.displayName ? user.displayName : user.email.split("@")[0];
  }

  return (
    <section className="bg-emerald-50 max-w-6xl mx-auto py-3 px-6 min-h-[calc(100vh-96px)] flex justify-center items-center">
      <div>
        <h2 className="text-5xl text-center font-semibold text-gray-600 mb-6">
          Welcome, <span className="text-emerald-700">{content}</span>
        </h2>
        <h6 className="text-gray-400 text-3xl">
          Checkout page is under construction. Thank you
        </h6>
      </div>
    </section>
  );
};

export default Checkout;
