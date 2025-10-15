import { Component } from "react";

class HijoNumero extends Component{
    seleccionarNumero = () => {
        var num = parseInt(this.props.numero);
        this.props.sumarNumeros(num);
    }
    render() {
        return (<div>
            <h2 style={{color:"red"}}>Número {this.props.numero}</h2>
            <button onClick={this.seleccionarNumero}>
                Sumar {this.props.numero}
            </button>
        </div>)
    }
}

export default HijoNumero;