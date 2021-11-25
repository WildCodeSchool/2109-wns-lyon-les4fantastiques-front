import React from 'react';
import Button from '@mui/material/Button';
import './MainPageComponent.css';

function MainPageComponent(){
	return(
		<div className = "background">
			<div className = "top"> 
        <Button className = "connex" variant="contained">Connexion</Button>
        <Button variant="inscrip">Inscription</Button>
      </div>
      <div className = "bottom">
        <div className = "middleBottom"><p>Bienvenue sur <span className = "textYellow">EasyTicket</span>, votre outil de gestion de projet <span className = "textGreen">collaboratif</span></p></div>
      </div>
		</div>
	);
}

export default MainPageComponent;