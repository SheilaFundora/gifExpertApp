import {getGifs} from "../functions/getGifs";
import {useEffect, useState} from 'react';


export const useFetchGif = (categories) => {
    //hook q resive 2 parametros,un arreglo donde guardaremos los datos que devuelve nuestra funcion getGifs
    // y una variable para especificar cuando este cargando
    const [state, setState] = useState( {data: [], loading: true});

    useEffect( () => {
        // el getGifs es una promesa q devuelve una respuesta con la data de la api, para acceder a ella es asi
        getGifs(categories)
            .then(img => setState( { data: img, loading: false } ) );
        //devuelve una img y quiero hacer lo que sige =>
        //con el setState queremos mandar las img para q sean renderizadas correctamente, y actualizamos el  estado
    }, [categories]);

    return state;
}