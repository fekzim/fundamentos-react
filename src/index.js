import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
// Para passar propriedades para um componente você deve ir até ele e escrever a "variavel" e o valor, dentro do componente você ira escrever o nome
// de como sera recebido o valor como props, e la dentro ira escrever por exemplo "props.variavel", assim você envia props

// Propriedades são apenas leitura, se você quer fazer um tratamento de informação tera que receber o valor em uma variavel dentro do componente que estava
//recebendo o props e la sim fazer o tratamento, states seriam propriedades que podem ser alteradas

//Em si todos os componentes devem estar envolvidos por alguma tag como uma div ou um fragment "<> </>"
ReactDOM.render(
    <App/>, 
document.getElementById('root'))

