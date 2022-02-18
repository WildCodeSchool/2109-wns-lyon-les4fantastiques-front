import React from 'react';
import Button from '@mui/material/Button';
import './welcomePage.css';

function WelcomePage(){
	return(
		<div className = "background">
			<div className = "top"> 
        <Button variant="contained">Connexion</Button>
        <Button variant="contained">Inscription</Button>
      </div>
      <div className = "bottom">
        <div className = "middleBottom" data-testid="middleText"><p>Bienvenue sur <span className = "textYellow">EasyTicket</span>, votre outil de gestion de projet <span className = "textGreen">collaboratif</span></p></div>
      </div>
		</div>
	);
}

export default WelcomePage;