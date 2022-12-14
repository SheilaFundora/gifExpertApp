import React, {useState} from 'react';
import PropTypes  from 'prop-types';


export const AddCategories = ({setCategory, categories }) => {

    const [inputValue, setInputValue] = useState('category');

    const handdleAdd = (e) => { //La e es el evento que resive
      setInputValue(e.target.value);
    }

    const handdleSumbit = (e) => {
      e.preventDefault();//esto es para cuando de enter no se recarge la pagina

      if ( !categories.includes(inputValue) && inputValue !== '' ){
          setCategory( cat => [inputValue,...cat])//se pueden mandar las categorias pero el setCategories tiene un
          // codback que tiene la referencia al aterior
          setInputValue('');
      }
    }

    return (
        <form onSubmit={handdleSumbit}>
            <input
                type="text"
                value={inputValue}
                onChange={handdleAdd}
            />
        </form>

    );
}

AddCategories.prototype = {
    setCategory: PropTypes.func.isRequired
}