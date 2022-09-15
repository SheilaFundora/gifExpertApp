import React, {useState} from 'react';
import {AddCategories} from "./Components/AddCategories";

export const GifExpertApp = () => {
    const [categories, setCategory] = useState(['risas', 'llantos','gritos']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategory = {setCategory}/>
            <hr />
            <ol>
                {
                    categories.map( cat => {
                        return <li key={cat}>{cat}</li>
                    })
                }
            </ol>
        </>

    );
}

