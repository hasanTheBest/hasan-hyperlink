import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

function RequireAuth({ children }) {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

  if (error) {
    return <h1 className="py-8 text-4xl text-rose-800">{error.message}</h1>;
  }

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
