import "./Header.scss";
import NavBar from "./NavBar/NavBar";
import EasyTicketLogo from "../../../assets/images/easy-ticket-logo.svg";
import NavSelect from "./NavSelect/NavSelect";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/Auth/AuthProvider";

function Header(): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const { currentUser, isConnected, checkLogin } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="main-header-container">
        <div className="header--item">
          <img
            src={EasyTicketLogo}
            id="EasyTicketLogo"
            alt="EasyTicketLogo"
            className="navbar--logo"
          />
        </div>
        <div className="header--item">
          <IconButton size="large" aria-label="show 2 new notifications" color="inherit">
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
        <div className="header--item">
          <NavBar currentUser={currentUser} />
        </div>
        <div className="header--item">
          <NavSelect navigate={navigate} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
}

export default Header;
