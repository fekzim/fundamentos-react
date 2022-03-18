## Iniciando Um projeto React
Após instalar o react em si dentro do projeto por meio do node, você deve ver que algo importante é o arquivo **index.js**, esse arquivo acaba sendo responsavel por trazer o react atona e anexar ao **index.html** por meio da div com id **Root**

> index.js
~~~jsx
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
ReactDOM.render(
    <App/>, 
document.getElementById('root'))
~~~

>index.html
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
~~~

## Basicos do React 

## Criando um Componente

Crie um novo arquivo com a extensão jsx de preferencia e la escreva

~~~jsx
    import React from "react";

    export default function Funcao(props){
        return(
    <div> </div>
              )
    }
~~~

**É importante lembrar que todo componente deve ter uma <div> ou fragmento "<> </>" onde o seu conteudo deve estar dentro senão não sera possivel criar o componente**

Você importa o react para que ele reconheça as funçoes do proprio react e então exporta uma função que você pode dar o nome que você desejar, como parametro a função recebe **props** que se trata de propriedades que o componente pai pode passar para esse componente, você então coloca um return e la deve criar uma <div> ou fragmento <> </> onde dentro estara o conteudo do componente.

**Se for criar uma função ou variaveis do componente, crie antes do Return**

## Criando um componente central

o App.jsx

ela se torna responsavel por renderizar todos os outros componentes dentro dele, é importante importar assim como todos o react e la dentro importar os componentes necessarios.

## Chamando um componente

**Após importar ele** você vai poder chamar o componente pelo nome usado para importar ele, exemplo
~~~jsx
  import COMPONENTE from "./Componente";
~~~

        Ou seja, nessse caso o Componente seria chamado com a tag <COMPONENTE> </COMPONENTE>

Um componente se torna filho quando ele esta dentro de um componente, o componente que tem componentes dentro dele se torna o Pai

## Passando propriedades para um componente diretamente

Você pode passar valores para o componente simplesmente quando chama ele e dentro de sua tag passa um dado por exemplo

~~~jsx
    <COMPONENTE titulo="Componente"> </COMPONENTE>
~~~

**Nesse caso se trata do pai passando para o componente filho informações**

**Esses dados passados são passados pelo parametro props que é citado na criação de componentes**

**props se trata de uma array que é acessado de todos os filhos do componente pai, o valor "titulo" poderia ser acessado por {props.titulo}**

**você pode usar o props.children para que todas as informações do filho sejam mostradas**
