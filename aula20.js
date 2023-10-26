let body = document.getElementById("body")
console.log(body)

let fundoazul = document.getElementsByClassName("fundoazul")
console.log(fundoazul[1])

let body = document.getElementById("body")
body.innerHTML = "<h2> Felipe Freitas !!!</h2> <p> Lorem </P>"

let botao1 = document.getElementById ("botao1");
botao1.addEventListener("click", acaoClique);

function acaoClique (){
    alert("Felipe")
}