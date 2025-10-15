import { Component } from "react";
import Comic from "./Comic";

class Comics extends Component{
    state = {
        comics: [
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña"
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno"
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://i1.whakoom.com/large/1a/2b/b1c53be43ba54f9b9be5e35d392eed02.jpg",
              descripcion: "Yo soy Groot"
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores"
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons"
            },
            {
              titulo: "Batman",
              imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
              descripcion: "Murcielago"
            }
        ], 
        favorito: null
    }

    deleteComic = (index) => {
        //CON EL METODO SPLICE INDICAMOS EL INDICE A ELIMINAR Y EL 
        //NUMERO DE ELEMENTOS DE UNA COLECCION
        console.log("Index: " + index);
        this.state.comics.splice(index, 1);
        this.setState({
            comics: this.state.comics
        })
    }

    seleccionarFavorito = (comicFavorito) => {
        this.setState({
            favorito: comicFavorito
        })
    }
    render() {
        return (<div>
            <h1>Comics</h1>
            {
                this.state.favorito && 
                <div style={{backgroundColor: "fuchsia"}}>
                    <h4>{this.state.favorito.titulo}</h4>
                    <img src={this.state.favorito.imagen} alt="favorito"
                    style={{width: "60px", height: "100px"}}/>
                </div>
            }
            {
                this.state.comics.map((comic, index) => {
                    return (<Comic key={index} 
                        index={index}
                        comic={comic}
                        seleccionarFavorito={this.seleccionarFavorito}
                        deleteComic={this.deleteComic}/>)
                })
            }
        </div>)
    }
}

export default Comics;