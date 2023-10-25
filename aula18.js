let nome = "Felipe Pereira de Freitas";
let Numero1 = 1991
let numero2 = 2023
let Soma1 = Numero1 + numero2
let multiplicação = Numero1 * numero2
console.log(nome,Soma1)
alert(multiplicação)

function divisao (Numero1,numero2){
    if (numero2 == 0){
        console.log ("Não é possivel divisão com 0")
    }else{
        console.log(Numero1/numero2)
    }
}
divisao (50,0)