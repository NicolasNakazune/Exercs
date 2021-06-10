let line = gets("11 7 -11 6 11 -2 10 7").split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A+B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);


/*
var listA=[11,-11,11,10];
var listB=[7,6,-2,7];

var result=[];

for (i = 0; i <= 3; i++) {
    result[i] = (listA[i]) + (listB[i]);
    console.log("X = " + result[0]);
}
*/

function aparecer() {
    document.getElementById("resposta").innerHTML = "<b>clicou</b>";
}
function apagar() {
    document.getElementById("resposta").innerHTML = "";
}

function linkExterno() {
    document.getElementById("links").innerHTML = "<b>YOUTUBE</b>";
}
function youtube(elemento) {
    window.open("https://www.youtube.com"); //abre em outra aba
    //window.location.href=""; //abre na mesma aba
}

function emcima(elemento) {
    elemento.innerHTML = "> Mouse: Detectado";
}
function fora(elemento) {
    elemento.innerHTML = ">Mouse: Não Detectado";
}

function mudar(elemento) {
    console.log(elemento.value);
}

function mudarLink(elemento) {
    console.log(elemento.value);
}

/*
function carregando(){
    alert("Página Carregada");
}

var validar = 0;
function validarIdade(idade){
    if (idade >=18){
        return true
    }else{
        return false
    }
}
var idade = prompt("Sua idade");
console.log(validarIdade(idade));
*/
