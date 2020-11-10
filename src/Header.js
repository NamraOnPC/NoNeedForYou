import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {

    const history = useHistory();

    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__back" />
                </IconButton>
            ) : (
                    <IconButton>
                        <PersonIcon className="header__icon" fontSize="large" />
                    </IconButton>)
            }

            <Link to="/">
                <img className="header__logo"
                    src="https://i.pinimg.com/originals/dd/15/54/dd15545c939299fe6d4d21ad195de3dd.png"
                    alt="NoNeedForYou Logo"
                />
            </Link>

            <Link to="/delete">
                <IconButton>
                    <DeleteIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>

        </div>
    )
}

export default Header;