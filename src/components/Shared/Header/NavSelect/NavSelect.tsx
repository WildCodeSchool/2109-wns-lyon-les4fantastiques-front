import React from 'react';
import './NavSelect.scss';
import Select from 'react-select'

function NavSelect() : JSX.Element {

    const navOptions = [
    { value: 'ProjectCreation', label: 'Créer un projet' },
    { value: 'ticketCreation', label: 'Créer un ticket' },
    { value: 'deconnexion', label: 'Se déconnecter' }
    ]

	return(
        <div>
          <Select options={navOptions}></Select>
        </div>
	);
} 

export default NavSelect;