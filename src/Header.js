import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function Header(){
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            <img className="header__logo" 
            src="https://i.pinimg.com/originals/dd/15/54/dd15545c939299fe6d4d21ad195de3dd.png" 
            alt="NoNeedForYou Logo"
            />
            <IconButton>
                <DeleteIcon className="header__icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header;