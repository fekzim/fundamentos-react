import React from "react";
import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Card from './componentes/layout/Card'
import Aleatorio from './componentes/basicos/Aleatorio'
import './App.css'
import Familia from "./componentes/basicos/Familia";
import FamiliaMembro from "./componentes/basicos/FamiliaMembro";
import ListaNomes from "./componentes/Repeticao/ListaNomes";
import ListaProdutos from "./componentes/Repeticao/ListaProdutos";
import IndiretaFilho from "./componentes/comunicacao/IndiretaFilho";
import IndiretaPai from "./componentes/comunicacao/IndiretaPai";
import Input from "./componentes/Controlador/Input";
import Contabilizar from "./componentes/Controlador/Contador";

export default function App(props){
    return(
        <div id="App">
          <h2> Fundamentos</h2>
            
           
          <div className="Cards">

          <Card title="Contabilizador">
            <Contabilizar numeroInicial={10}></Contabilizar>
          </Card>

          <Card title="Display dinamico" color="blue">
            <Input> </Input>
          </Card>

          <Card title="Comunicação direta">
            <IndiretaPai></IndiretaPai>
          </Card>
          {/*
              <Card title="Comunicação direta">
              <IndiretaPai>

              </IndiretaPai>
              </Card>
    */}
             


            <Card title="Lista-Produtos" color="#5C62F8" className="Tabela">
              <ListaProdutos></ListaProdutos>

            </Card>

            <Card title="Lista-Repetição" color="#1756DB"> 
              <ListaNomes></ListaNomes>
            </Card>

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
