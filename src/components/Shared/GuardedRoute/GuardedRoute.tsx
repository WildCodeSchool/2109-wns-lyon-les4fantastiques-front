import { Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/Auth/AuthProvider";

interface IProps {
  children: JSX.Element;
}
const GuardedRoute = ({ children }: IProps) => {
  const { isConnected } = useAuth();

  return isConnected ? children : <Navigate to="/connexion" />;
};

export default GuardedRoute;
