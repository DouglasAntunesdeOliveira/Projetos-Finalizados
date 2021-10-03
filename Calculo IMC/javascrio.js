
function enviar(){
let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;
document.getElementById("res").innerHTML = ``;

    let imc = peso / (altura * altura);

if (imc <= 18.5){
    res.innerHTML += `Seu IMC é ${imc.toFixed(2)} e você esta Abaixo do Peso`;
} else if (imc > 18.4 && imc <= 24.9){
    res.innerHTML += `Seu IMC é ${imc.toFixed(2)} e você esta com Peso Normal`;
} else if (imc > 25 && imc <= 29.9){
    res.innerHTML += `Seu IMC é ${imc.toFixed(2)} e você esta com Sobrepeso`;
} else if(imc > 30 && imc <= 34.9){
    res.innerHTML += `Seu IMC é ${imc.toFixed(2)} e você esta com Obesidade Grau 1`;
} else if (imc > 35 && imc <= 39.9){
    res.innerHTML += `Seu IMC é ${imc.toFixed(2)} e você esta com Obesidade Grau 2`;
} else if (imc > 40){
    res.innerHTML += `Seu IMC é ${imc.toFixed(2)} e você esta com Obesidade Grau 3`;
} else{
    res.innerHTML += `Valor não encontrado`;
}


};
