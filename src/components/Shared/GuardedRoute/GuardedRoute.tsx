interface IProps {
  children: JSX.Element;
}
const GuardedRoute = ({ children }: IProps) => {
  return localStorage.getItem("isLoggedIn") === "true"
    ? children
    : //   <Navigate to="/connexion" />
      children;
};

export default GuardedRoute;
