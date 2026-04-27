/*
Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
*/

//  peso / (altura*altura);

var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = (peso / (altura * altura)).toFixed(2)

    if(imc < 17){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + "<br> Cuidado, você está muito abaixo do peso"
    }
    else if (imc <= 18.49){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + "<br> Você está abaixo do peso" 
    }
    else if (imc <= 24.99){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + "<br> Você está com o peso adequado" 
    }
    else{
        resultado = document.getElementById('resultado')
        resultado.innerHTML = "<br> Seu resultado foi: " + imc + "<br> Você está acima do peso adequado" 
    }

    peso = document.getElementById('peso').value = '';
    altura = document.getElementById('altura').value = '';
}