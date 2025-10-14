import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {
    deportes = ["Curling", "Petanca", "Poker", "Futbol"];
    render() {
        return (<div>
            <h1>Padre deportes</h1>
            {
                this.deportes.map((deporte, index) => {
                    return (<HijoDeporte key={index} nombre={deporte}/>)
                })
            }
        </div>)
    }
}

export default PadreDeportes;