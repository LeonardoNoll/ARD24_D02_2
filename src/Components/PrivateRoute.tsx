import { RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { isSignedIn } = useUser();

  if (isSignedIn === undefined) return <div>Loading...</div>;

  return isSignedIn ? <Outlet /> : <RedirectToSignIn />;
}
