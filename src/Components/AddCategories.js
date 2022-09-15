import React, {useState} from 'react';

export const AddCategories = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('add');

    const handdleAdd = (e) => { //La e es el evento que resive
      setInputValue(e.target.value);
    }

    const handdleSumbit = (e) => {
      e.preventDefault();//esto es para cuando de enter no se recarge la pagina
      setCategory( cat => [...cat, inputValue])//se pueden mandar las categorias pero el setCategories tiene un
        // codback que tiene la referencia al aterior
    }

    return (
        <form onSubmit={handdleSumbit}>
            <input
                type="text"
                value={inputValue}
                onChange={handdleAdd}
            />
            <button onClick={handdleSumbit}>Add</button>
        </form>

    );
}

