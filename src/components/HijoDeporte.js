import { Component } from "react";

class HijoDeporte extends Component {
    seleccionarFavorito = () => {
        //CAPTURAMOS EL DEPORTE DEL PROPIO COMPONENT EN PROPS
        var deporte = this.props.nombre;
        console.log("algo" + deporte)
        //REALIZAMOS LA PETICION AL PARENT
        this.props.mostrarFavorito(deporte);
    }

    render () {
        return (<div>
            <h3 style={{color:"blue"}}>Deporte: {this.props.nombre}</h3>
            <button onClick={this.seleccionarFavorito}>
                Seleccionar favorito
            </button>
        </div>)
    }
}

export default HijoDeporte;