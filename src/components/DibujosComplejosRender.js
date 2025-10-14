import { Component } from "react";

class DibujosComplejosRender extends Component{
    //NECESITAMOS UN ARRAY CON NOMBRES Y DICHO ARRAY DEBE
    //ESTAR DECLARADO EN state PARA ACTUALIZAR EL DIBUJO
    state = {
        nombres: ["Lucia", "Diana", "Antonia", "Sofia", "Adrian"]
    }

    generarNombre = () => {
        this.state.nombres.push("NUEVO NOMBRE")
        
        this.setState({
            nombres: this.state.nombres
        })
    }
    
    render() {
        return (<div>
            <h1>Dibujos complejos Render</h1>
            <button onClick={this.generarNombre}>
                Nuevo nombre
            </button>
            {
                //ESTE CODIGO ES JSX DE REACT
                //EL CODIGO LOGICO DEBE CONTENER UN RETURN
                this.state.nombres.map((nombre, index) => {
                    //ESTE CODIGO NO PUEDE ESTAR VACIO, NECESITA UN RETURN
                    //PARA EL DIBUJO
                    return (<h3 style={{color: "blue"}} key={index}>
                        {nombre}
                    </h3>)
                })
            }
        </div>)
    }
}

export default DibujosComplejosRender;