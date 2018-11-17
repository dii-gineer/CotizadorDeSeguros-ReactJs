import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';


class Resumen extends Component {
    mostrarResumen = () => {
        const {marca,year,plan} = this.props.datos;
        if (!marca||!plan || !year) return null;
        return(
            <div className="resumen">
                <h2> Resumen de Cotización</h2>
                <li> Marca: {primeraMayuscula(marca)} </li>
                <li> Plan:  {primeraMayuscula(plan)} </li>
                <li> Año:  {year} </li>
            </div>
        )

    }
    render(){
      

        return(
            <div>
                {this.mostrarResumen()}
            </div>
        )
       
    }
    
}
export default Resumen;