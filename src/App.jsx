import React from "react";
import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Card from './componentes/layout/Card'
import Aleatorio from './componentes/basicos/Aleatorio'
import './App.css'
import Familia from "./componentes/basicos/Familia";
import FamiliaMembro from "./componentes/basicos/FamiliaMembro";

export default function App(props){
    return(
        <div id="App">
          <h2> Fundamentos</h2>
          
          <div className="Cards">

            <Card title="Familia e filhos" color="#5AABF5">
              <Familia sobrenome="Pintao">
                <FamiliaMembro nome="Matheus"/>
                <FamiliaMembro nome="Joao"/>
              </Familia>
            </Card>

            <Card title="Valor Aleatorio" color="#70b170">
              <Aleatorio min="1" max="60"></Aleatorio>
            </Card>
            
            <Card title="Primeiro componente">
              <Primeiro></Primeiro>
            </Card>
          
            <Card title="Com Parametro">
              <ComParametro 
              titulo="grande Titulo" 
              subtitulo="Muito dahora"
              pessoa="Felipe"
              nota={ 10 }/>
            </Card>
          </div>   
    </div>
    )
}
