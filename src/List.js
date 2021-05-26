import React from 'react';
import Item from './Item';

function List(props){
    return(
        // En JSX no necesitamos ni terminar con ; ni las llaves, solo las declarativas que ponemos al principio
        // Como en App.js añadimos la prop items a List con un arreglo de los libros, con this.state.books ( solo de lectura )
        // Ahora con la función ECMAscript map, que mapea los arreglos contenidos en props.items mostramos con la función declarativa
        // JSX todos los item.title del arreglo

        <div className="list">
            {
                props.items.map( item=>
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating} 
                        
                        onupdaterating={props.onupdaterating} 
                        onremove={props.onremove} />
                )
            }
        </div>
    );
}

export default List;