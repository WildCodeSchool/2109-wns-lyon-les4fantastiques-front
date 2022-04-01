import React from "react";
import Button from "@mui/material/Button";
import "./WelcomePage.scss";
import { Link } from "react-router-dom";

function WelcomePage(): JSX.Element {
  return (
    <div className="background">
      <div className="top">
        <Link to="/connexion" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ margin: 3, width: "25ch" }}>
            Connexion
          </Button>
        </Link>
        <Link to="/inscription" style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ margin: 3, width: "25ch" }}>
            Inscription
          </Button>
        </Link>
      </div>
      <div className="bottom">
        <div className="middleBottom" data-testid="middleText">
          <p>
            Bienvenue sur <span className="title-EasyTicket">EasyTicket</span>, votre outil de
            gestion de projet <span className="textGreen">collaboratif</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
