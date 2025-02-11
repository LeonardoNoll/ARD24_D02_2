import { useUser } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
import Error403 from "../pages/Error403";

export default function PrivateRoute() {
  const { isSignedIn } = useUser();

  if (isSignedIn === undefined) return <div>Loading...</div>;

  return isSignedIn ? <Outlet /> : <Error403 />;
}
