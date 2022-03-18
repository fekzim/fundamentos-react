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
 Aqui estara sendo usado como um bloco de notas para memorizar e revisar alguns conceitos que foram feitos e estudados, assim ajudando a fixar melhor em minha mente, já que se tratam de fundamentos, os basicos achei importante fazer isso e dar maior importancia ao arquivo README.MD

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

Você importa o react para que ele reconheça as funçoes do proprio react e então exporta uma função que você pode dar o nome que você desejar, como parametro a função recebe **props** que se trata de propriedades que o componente pai pode passar para esse componente, você então coloca um return e la deve criar uma tag "div" ou fragmento <> </> onde dentro estara o conteudo do componente.

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

~~~jsx
    {props.titulo}
~~~

    Assim que seria para abrir o valor titulo recebido como props


## Criando Listas com react
   Essa seção é bem util na criação de listas ou quando é necessario 1 unico componente renderizar varias linhas por exemplo.

~~~jsx
    const lis = nomes.map(nome => {
        return (<li key={nome.id}>
            {nome.id}) {nome.nome} = {nome.nota}
        </li>)
    })
    return(
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
}
~~~

 Nesse exemplo a cima se trata de uma lista criada a partir de uma array, a array se trata de **nomes**

Você cria uma constante onde ela recebe o *array** e usa a função **.map()** para que dentro dela por meio de uma vector function nome um **list iten** seja renderizado e la são colocado o nome.id, nome.nome. (ignore o =, ele é apenas estetico) e nome.nota

( A função .map ira pegar todos os valores dentro de um array e ira separar eles, você pode passar uma função dentro dela para que haja um tratamento especifico para cada "linha" da array, sendo muito util)

**o elemento key se trata de um valor que serve para o react poder renderizar com maior facilidade esse componente, ele deve ser unico**

##  Usando CSS em um componente

**Você primeiro deve importar o arquivo .css no componente**

~~~jsx
    import './style.css'
~~~


 Após isso todas as tags html dentro do componente estarão sujeitas aos estilos dentro do arquivo Css.

**para colocar uma class em um elemento no React você deve usar className em vez de só class** 


~~~jsx
   <div className="">
~~~

**Você pode usar props passadas do componente para mexer com o css do componente, você simplesmente ira passar os dados do props que você deseja para um objeto e então dentro da div que você deseje coloque o elemento style e coloque o objeto, o Css ira reconhecer.**

~~~jsx
    const   Estilizado = {
        backgroundColor:props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return(
        <div className="Estilo" style={ Estilizado }>
       </div>
           )
~~~

 Nesse código a cima vemos o objeto constante chamado Estilizado recebendo como background-color o props.color e o border-color também

> Importante ver que não se pode usar "-" nesse caso, então se usa a formatação camelCase, onde se usa a LETRA MAIUSCULA para que seja indicado que há -


**os pipes (||) servem para caso não tenha sido recebido nenhuma cor seja adotado aquele valor**

## Passando propriedades de filho para Pai

 Se trata de uma tarefa mais difici já que no react existe essa questão da hierarquia e props são passadas de pai para filho e não o contrario, passar props do filho para o pai faria o filho virar o pai e o pai virar o filho.

**A solução:** Simplesmente passar uma função como props para o filho onde dentro do filho executar a função que esta dentro do pai e assim sendo possivel passar informações do filho para o pai.

> PAI

~~~jsx

 import React from "react"
 import Filho from "./Filho"


    export default function Pai(){
    
    let numero;    

    function enviarInformacao(n){
            numero = n;
        }


            return(
       <div> 
           <Filho clicar={enviarInformacao}> </Filho>
        </div>
                )
            }
~~~

> FILHO

~~~jsx
    import React from "React"
    
    export default function Filho(props){
        return(
       <div> 
            <button OnClick={function(e){
                    props.clicar(50)}}>Enviar informação </button>
        </div>
            )
}
~~~

 No componente pai importamos o componente filho, dentro de pai criamos uma funçao que sera a responsavel por receber os valores do componente filho para que traga para o pai, essa que seria o **enviarInformacao**, ele tem como parametro o n que sera o numero recebido.

 Então chamamos o componente filho e passamos como props o Clicar que nele esta a função enviarInformacao

Dentro do filho criamos algo que ira chamar a função, nesse caso o button, chamamos o evento onClick e falamos que ele vai como resposta abrir um objeto js, uma function(e) com parametro que é um evento, chamamos então o props.clicar(50) que é nossa funcão enviarInformacao onde esta recebendo o parametro n que é o numero 50.

Então como a função foi executada ela faz a variavel numero receber o valor de n e assim é passado a informação de filho para pai

## Usando State

 O state se trata de uma capacidade do React de atualizar de maneira dinamica o componente quando algum valor é alterado.

para usar o state primeiro é importante o importar para o componente

~~~jsx
      import React, {useState} from "react";

    export default function Componente(props) {

        let [numero,setNumero] = useState(0)

        funtion mudarState(n){
            setNumero(n);
        }
        return(
                <div>
                      {props.numero}
                 </div>
            )}
~~~

 No codigo a cima você ve como é usado o State, o State se trata como uma array, você coloca a variavel do State e então a function que recebe valor para a variavel do state, ela tem um valor inicial que é 0

 Na function mudarState ela recebe o paramentro n que então la dentro chama a function setNumero onde atualiza de maneira dinamica a variavel numero.
