import React from 'react';
import './Item.css';

//Vamos a cambiar nuestrs function Item por una clase que extienda de React.Component porque
//necesito utilizar el estado para poder mostrar la información.

//Porque vamos a empezar a usar lógica.

//Al cambiar a clase, hay que meterlo todo en el método render(){}
//Y a su vez, hay que definir el constructor para hacer referencia a las props
//Como el this.state es de solo lectura, necesitamos añadir el método componentDidMount para portfinder
//setear el estado

class Item extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            stars: []
        };
    }

    componentDidMount(){
        this.setState({
            stars: Array(parseInt(this.props.rating)).fill(0)
        })
    }
    render(){
        return(
            <div className="item">
                <div className="image"><img src={'img/'+ this.props.image} width="100%" /></div>
                <div className="title">{this.props.title}</div>
                <div className="rating">
                    <p>
                    {
                        this.state.stars.map(x =>
                            <img src="img/star.png" width="32" />
                        )
                    }
                    </p>
                    Calificación: 
                    <select value={this.props.rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button>Eliminar</button>
                </div>
            </div>
        );
    }
    
}

export default Item;