import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ component: Component, authentication }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!authentication) return navigate("/");
  }, []);
  return <Component />;
}
