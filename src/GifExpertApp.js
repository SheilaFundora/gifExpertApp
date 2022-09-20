import React, {useState} from 'react';
import {AddCategories} from "./Components/AddCategories";
import {GifGrid} from "./Components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategory] = useState(['Ricky and Morty']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategory = {setCategory} categories = {categories} />
            <hr />
            <br />
            <ol>
                {
                    categories.map( cat => (
                         <GifGrid key={cat} categories= {cat} />
                    ))
                }
            </ol>
        </>

    );
}

