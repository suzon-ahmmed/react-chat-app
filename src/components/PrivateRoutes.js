import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoutes({ children }) {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? <Navigate to="/login" /> : <Outlet />;
}
