import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Remove({ name , number , profilePic, timestamp}) {
    

    return (
        <div className="remove">
            <Avatar className="remove__image" alt={name} src={profilePic} />
        </div>
    )
}

export default Remove;
