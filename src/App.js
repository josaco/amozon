import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';


// Hemos cambiado de function a crear una class con un render() y dentro el return para empezar a manejar el estado
// Ahora necesitamos definir el constructor en 13
// En 16 meto un arreglo de objetos, llamado books para empezar a añadir los libros

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      books:[
        {id:0, rating: 4, title: 'Río Júcar', image: 'jucacasa.jpg' },
        {id:1, rating: 3, title: 'Cinemático variado', image: 'cinevar.jpg' },
        {id:2, rating: 5, title: 'Circuito la Torrecica', image: 'torrecica.jpg' },
        {id:3, rating: 5, title: 'Vuelos en la Playa', image: 'playa.jpg' },
        {id:4, rating: 5, title: 'Vuelos en el Huerto', image: 'huerto.jpg' }
      ]
    };
  }

  render(){
    return (
      <div className="app">
        <Menu title="VUELOS" />
        <List items={this.state.books}/>
      </div>
    );
  }
}

export default App;
