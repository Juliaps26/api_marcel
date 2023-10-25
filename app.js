const estadoseCidades=require('./modulo/estadosCidades')
// importando o módulo e um arquivo local chamado estadosCidades


// Criando função 
const getListaDeEstados=function(){
    // Criando um objeto  
    let JSONSiglas={}
    // Criando array 
    let arraySiglas=[]
    // Contador valor zero
    let contador=0

    // Loop while, que continua ate que o contador seja menor que 27 (27 estados)
    while(contador<27){
        // Conseguimos a sigla apartir do modulo (estadosCidades) e adiciona no array
        arraySiglas.push(estadoseCidades.estadosCidades.estados[contador].sigla)
        contador++
    }
    JSONSiglas.uf=arraySiglas
    JSONSiglas.quantidade=arraySiglas.length
    // Resultado da função 
    return JSONSiglas
}

// Criando outra função
const getDadosEstado=function(){
    // Armazenar dados do estado
    let JSONDados={}
// Pode alterar a sigla 
    let filtro='BA'
    let contador=0
    // Loop até que tenha a sigla (true)
    while(true){
        if(filtro==estadoseCidades.estadosCidades.estados[contador].sigla){
            JSONDados.uf=estadoseCidades.estadosCidades.estados[contador].sigla
            JSONDados.descricao=estadoseCidades.estadosCidades.estados[contador].nome
            JSONDados.capital=estadoseCidades.estadosCidades.estados[contador].capital
            JSONDados.regiao=estadoseCidades.estadosCidades.estados[contador].regiao
            // O loop encerra quando encontra a sigla 
            break
        }
        contador++
    }
    // A função retorna o objeto (JSONDados), as informações do estado 
    return JSONDados
}

// Criando função 
// Buscar a capital de um estado com base na sigla fornecida (filtro)
const getCapitalEstado=function(){
    // Criando objeto para armazenar dados da capital
    let JSONCapital={}
    let filtro='RJ'
    let contador=0
    // Loop até que seja encontrada a sigla (true)
    while(true){
        // toUpperCase - letra maiscula
        if(filtro.toUpperCase()==estadoseCidades.estadosCidades.estados[contador].sigla.toUpperCase()){
            JSONCapital.uf=estadoseCidades.estadosCidades.estados[contador].sigla.toUpperCase()
            JSONCapital.descricao=estadoseCidades.estadosCidades.estados[contador].nome
            JSONCapital.capital=estadoseCidades.estadosCidades.estados[contador].capital
            // Fim do loop
            break
        }
        contador++
    }
    // Retorno da função
    return JSONCapital
}

// Criando função
const getEstadosRegiao=function(){
    // Criando objeto para guardar as informações das regiões e a lista de estados 
    let JSONRegiao={}
    // Armazenar informações dos estados 
    let arrayEstados=[]
    // Filtro região escolhida 
    let filtro='SUL'
    let contador=0
    // Loop 
    while(contador<27){
        // Conferir a letra maiscula 
        if(filtro.toUpperCase()==estadoseCidades.estadosCidades.estados[contador].regiao.toUpperCase()){
            let JSONEstados={}
            JSONEstados.uf=estadoseCidades.estadosCidades.estados[contador].sigla
            JSONEstados.nome=estadoseCidades.estadosCidades.estados[contador].nome
            arrayEstados.push(JSONEstados)
        }
        contador++
    }
    // Regiao e estado do JSON agora com base nas variaveis filtro e arrayEstados
    JSONRegiao.regiao=filtro.toUpperCase()
    JSONRegiao.estados=arrayEstados
    // Retorno da função
    return JSONRegiao
}

// Criando função
const getCapitalPais=function(){
// Armazena dados de capitais
    let JSONCapitais={} 
    let arrayCapitais=[]
    let contador=0
    // Loop 27 estados, onde verifica se tem a capital
    while(contador<27){
        if(estadoseCidades.estadosCidades.estados[contador].capital_pais){
            let JSONEstados={}
            JSONEstados.capital_atual=estadoseCidades.estadosCidades.estados[contador].capital_pais.capital
            JSONEstados.uf=estadoseCidades.estadosCidades.estados[contador].sigla
            JSONEstados.descricao=estadoseCidades.estadosCidades.estados[contador].nome
            JSONEstados.capital=estadoseCidades.estadosCidades.estados[contador].capital
            JSONEstados.regiao=estadoseCidades.estadosCidades.estados[contador].regiao
            JSONEstados.capital_pais_ano_inicio=estadoseCidades.estadosCidades.estados[contador].capital_pais.ano_inicio
            JSONEstados.capital_pais_ano_termino=estadoseCidades.estadosCidades.estados[contador].capital_pais.ano_fim
            arrayCapitais.push(JSONEstados)
        }
        contador++
    }
    // Adicionar ao array
    JSONCapitais.capitais=arrayCapitais
    // Retorna as capitais dos estados que também foram capitais do país alguma vez
    return JSONCapitais
}

// Criando função 
const getCidades=function(){
    let JSONCidades={}
    // Armazenar os nomes da cidades 
    let arrayCidades=[]
    let filtro='AL'
    // Dois contadores 
    let contadorEstados=0
    let contadorCidades=0

// Loop- buscar o estado com base na sigla escolhida no filtro, quando encontra o outro loop começa
    while(true){
        if(filtro==estadoseCidades.estadosCidades.estados[contadorEstados].sigla){
            while(arrayCidades.length<estadoseCidades.estadosCidades.estados[contadorEstados].cidades.length){
                arrayCidades.push(estadoseCidades.estadosCidades.estados[contadorEstados].cidades[contadorCidades].nome)
                contadorCidades++
            }
            break
        }
        // Contadores reiniciam 
        contadorEstados++
    }
    contadorEstados=0
    // Pega a sigla e dados sobre o estado 
    while(true){
        if(filtro==estadoseCidades.estadosCidades.estados[contadorEstados].sigla){
            JSONCidades.uf=estadoseCidades.estadosCidades.estados[contadorEstados].sigla
            JSONCidades.descricao=estadoseCidades.estadosCidades.estados[contadorEstados].nome
            JSONCidades.quantidade_cidades=estadoseCidades.estadosCidades.estados[contadorEstados].cidades.length
            JSONCidades.cidades=arrayCidades
            break
        }
        contadorEstados++
    }
    // Retorno 
    return JSONCidades
}

// Abrir o terminal para testar e chamar a função

//console.log(getCidades())
console.log(getCapitalPais())
//console.log(getEstadosRegiao())
//console.log(getCapitalEstado())
//console.log(getDadosEstado())
//console.log(getListaDeEstados())