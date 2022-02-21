import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header(){      
	return(
        <div className='main-navBar'>
            <ul>
                <li><Link to="/welcome">Accueil</Link></li>
                <li><Link to="/connexion">Connexion</Link></li>
                <li><Link to="/inscription">Inscription</Link></li>
            </ul>
        </div>

	);
}

export default Header;