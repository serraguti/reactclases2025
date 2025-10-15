import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {
    deportes = ["Curling", "Petanca", "Poker", "Futbol"];
    //NECESITAMOS UNA VARIABLE STATE PARA VISUALIZAR EL DEPORTE
    //FAVORITO
    state = {
        favorito: ""
    }
    //DEBEMOS TENER UN METODO QUE SERA INVOCADO POR EL HIJO
    //AL PULSAR SOBRE EL BOTON DE SELECCIONAR
    mostrarFavorito = (deporteSeleccionado) => {
        console.log("Padre");
        this.setState({
            favorito: deporteSeleccionado
        })
    }
    render() {
        return (<div>
            <h1>Padre deportes</h1>
            <h4 style={{backgroundColor: "lightgreen"}}>
                Su deporte favorito es: {this.state.favorito}
            </h4>
            {
                this.deportes.map((deporte, index) => {
                    return (<HijoDeporte key={index} nombre={deporte}
                    mostrarFavorito={this.mostrarFavorito}/>)
                })
            }
        </div>)
    }
}

export default PadreDeportes;