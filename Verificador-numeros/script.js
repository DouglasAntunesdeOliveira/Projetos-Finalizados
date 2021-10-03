    let num = document.getElementById("num")
    let dados = document.getElementById("flista")
    let res = document.getElementById("res")
    let valores = []

function isNumero(n){ //verifica se o numero esta entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){//SE o valor numerico de N for maior ou igual a 1 e o valor numerico de N for menor ou igual a 100
        return true
    } else {
        return false
    }
}

function inLista(n, l){//verifica se o numero esta na lista ou não
    if(l.indexOf(Number(n)) != -1){//-1 indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar(){//verifica se pé numero e se não esta na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){//SE o NUM for um valor numero e NÂO estiver na lista
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       dados.appendChild(item)
       res.innerHTML = ''
    } else {
        window.alert("Valor já adicionado ou invalido") 
    }
    num.value = ''
    num.focus()
}
    function finalizar(){
        if (dados.length == 0){
            window.alert("Adicione valores antes de adicionar")
        } else{
            let tot = dados.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            for (let pos in valores){
                soma += valores [pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p>O total de valores é ${tot}</p>`
            res.innerHTML += `<p>O menor valor é ${menor}</p>`
            res.innerHTML += `<p>O maior valor é ${maior}</p>`
            res.innerHTML += `<p>A soma dos valores é ${soma} </p>`
            res.innerHTML += `<p>A média dos valores é ${media} </p>`
        }
    }

