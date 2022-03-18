## Iniciando Um projeto React
Após instalar o react em si dentro do projeto por meio do node, você deve ver que algo importante é o arquivo **index.js**, esse arquivo acaba sendo responsavel por trazer o react atona e anexar ao **index.html** por meio da div com id **Root**

~~~jsx
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
ReactDOM.render(
    <App/>, 
document.getElementById('root'))
~~~

## Basicos do React 


`Criando um componente central`

o App.jsx

ela se torna responsavel por renderizar todos os outros componentes dentro dele, é importante importar assim como todos o react e la dentro importar os componentes necessarios.

**É importante lembrar que todo componente deve ter uma <div> ou fragmento "<> </>" onde o seu conteudo deve estar dentro senão não sera possivel criar o componente

`Chamando um componente`

**Após importar ele** você vai poder chamar o componente pelo nome usado para importar ele, exemplo 
~~~jsx
  import COMPONENTE from "./Componente";
~~~
