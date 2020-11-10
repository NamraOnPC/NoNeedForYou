import React from 'react';
import FavouriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import ReplayIcon from '@material-ui/icons/Replay';
import StarRateIcon from '@material-ui/icons/StarRate';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css';

function Swipebuttons() {


    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__replay">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavouriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default Swipebuttons;