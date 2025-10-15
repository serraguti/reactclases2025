import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component{
    state = {
        numeros: [5, 11], 
        suma: 0
    }
    sumarNumeros = (numero) => {
        console.log(numero);
        this.setState({
            suma: this.state.suma + numero
        })
    }

    generarNumero = () => {
        let aleatorio = parseInt(Math.random() * 500) + 1;
        this.state.numeros.push(aleatorio);
        this.setState({
            numeros: this.state.numeros
        })
    }

    render() {
        return (<div>
            <h1>Padre números</h1>
            {
                //CONDICIONAL IF/ELSE IF/ELSE
                this.variable == 0 ? 
                <h1>La variable es CERO</h1>:
                this.variable > 0 ?
                <h1>La variable es POSITIVA</h1>:
                <h1>El valor es negativo</h1>
            }


            <h3 style={{backgroundColor:"yellow"}}>
                La suma es: {this.state.suma}
            </h3>
            <button onClick={this.generarNumero}>
                Generar número
            </button>
            {
                this.state.numeros.map((numero, index) => {
                    return (<HijoNumero numero={numero} key={index}
                    sumarNumeros={this.sumarNumeros}/>)
                })
            }
        </div>)
    }
}

export default PadreNumeros;