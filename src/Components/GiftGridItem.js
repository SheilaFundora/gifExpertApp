import React from 'react';

export const GiftGridItem = ({url,title}) => {

    return (
        //libreria de animaciones
        <div className="card animate__animated animate__pulse mt-category">
            <div>
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </div>
    );
}

