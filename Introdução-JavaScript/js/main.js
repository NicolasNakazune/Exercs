function aparecer(){
    document.getElementById("resposta").innerHTML = "<b>clicou</b>";
}
function apagar(){
    document.getElementById("resposta").innerHTML = "";
}

function linkExterno(){
    document.getElementById("links").innerHTML = "<b>YOUTUBE</b>";
}
function youtube(elemento){
    window.open("https://www.youtube.com"); //abre em outra aba
    //window.location.href=""; //abre na mesma aba
}

function emcima(elemento){
    elemento.innerHTML="> Mouse: Detectado";
}
function fora(elemento){
    elemento.innerHTML=">Mouse: Não Detectado";
}

function carregando(){
    alert("Página Carregada");
}

function mudar(elemento){
    console.log(elemento.value);
}

function mudarLink(elemento){
    console.log(elemento.value);
}

/*
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
