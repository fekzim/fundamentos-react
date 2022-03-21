function gerarNumeroNaoContido(min,max,array){
    const aleatorio = parseInt(Math.random() * (max-min)) + min
    return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) :
    aleatorio
}

function gerarNumero(qtde){

    const numeros = Array(qtde).fill(0).reduce((nums)=> {
        const novoNumero = gerarNumeroNaoContido(1,60, nums)
        return [...nums, novoNumero]
    })


    return numeros
}