import { Navigate } from "react-router-dom";
interface IProps {
  children: JSX.Element;
}
const GuardedRoute = ({ children }: IProps) => {
  return localStorage.getItem("isLoggedIn") === "true" ? (
    children
  ) : (
    <Navigate to="/connexion" />
  );
};

export default GuardedRoute;
