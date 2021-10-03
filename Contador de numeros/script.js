document.querySelector("body").style.background = "url('foto-noite-grande.jpg')"
function contar() {
    let ini = document.getElementById('txti') //document.getElementById pega o valor digitado pelo usuario
    let fim = document.getElementById('txtf')//document.getElementById pega o valor digitado pelo usuario
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Erro = Verifique os dados digitados')
    } else {
        res.innerHTML = 'Contando:'   //o valor da variavel res foi trocado por contando
        let i = Number(ini.value)    //pega o valor que esta em ini e converte para Number
        let f = Number(fim.value)   //pega o valor que esta em ini e converte para Number
        let p = Number(passo.value)//pega o valor que esta em ini e converte para Number
        if ( i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){ // Contador C recebe inicio I ; enquanto C for menor igual a F fim ; contador C recebe ele mesmo mais o P passo
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c}\u{1f449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}