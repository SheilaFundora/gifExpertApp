import React from 'react';

export const GiftGridItem = ({url,title}) => {

    return (
        <div className="card">
            <div>
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </div>
    );
}

