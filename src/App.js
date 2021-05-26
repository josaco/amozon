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
      ],
      // Se crear un arreglo nuevo llamado copyBooks porque para buscar no vamos a modificar el arreglo books.
      copyBooks:[

      ]
    };
  }

  componentDidMount(){
    this.initBooks(); //Cada vez que se cargue el componente, se ejecutará iniBooks, que copia el arreglo books a copyBooks ( para el buscador )
  }

  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [ ... state.books]
    }));
  }

  onAdd = (item) =>{
    //console.log(item);
    let temp = [ ... this.state.books]; //notación de ECMAscript6 para copiar un arreglo.
    const id = temp[temp.length-1].id + 1;//para que me de el índice del último elemento y sacamos el id y le sumamos 1(siguiente id)
    item['id'] = id;//A mi item, le creo la propiedad de ID y le asigno el que acabo de crear
    temp.push(item);//Ahora con push inserto todo el elemento en mi arreglo temporal

    this.setState({books: [... temp]});//Lo regreso al state. Una copia de temp para que mis libros estén actualizados.
    this.initBooks();//Cuando agrego un elemento, también llamo a initBooks para que se copie copyBooks de books
  }

onSearch = (query) => {
  if(query == ''){
    //this.setState({copyBooks: [...this.state.books]}); En lugar de usar esto usaremos el this.initBooks();
    this.initBooks();
  }else{
    const temp = [...this.state.books]; //creo un arreglo temporal de los libros
    let res = [];

    temp.forEach(item =>{
      if(item.title.toLowerCase().indexOf(query) > -1){
        res.push(item);
      }
    });
    this.setState({copyBooks: [...res]});
  }
}

  onUpdateRating = (item) => {
    var temp = [...this.state.books];
    const index = temp.findIndex(x => x.id == item.id);
    
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({books: [...temp]});
    this.initBooks();
  }

  onRemove = (id) => {
    var temp = [...this.state.books];
    const res = temp.filter(item => item.id != id);

    this.setState({books: [...res]});
    this.initBooks();
  }

  render(){
    return (
      <div className="app">
        <Menu title="VUELOS" onadd={this.onAdd} onsearch={this.onSearch} />
        <List 
          items={this.state.copyBooks} 
          onupdaterating={this.onUpdateRating} 
          onremove={this.onRemove}  />
      </div>
    );
  }
}

export default App;
