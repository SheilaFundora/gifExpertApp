import React, {useEffect, useState} from 'react';
import {GiftGridItem} from "./GiftGridItem";


export const GifGrid = ({categories}) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=83N0qCPvM4GITCoVnYEza8E9L8UZcw3Y&q=Ricky+and+morty&limit=8';
        const resp = await fetch(url);
        const {data} = await resp.json();
        // ya en data tenemos todos los datos que necesitamos, pero de forma muy larga,
        // podemos destructirizarlo

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url

            }
        })

        setImages(gifs);
    }

    console.log(images)

    return (
        <>
            <h2>{categories}</h2>
            <div className="card-grid">
                {
                    images.map( img => (
                        <GiftGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    );
};


