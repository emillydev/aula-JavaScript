
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}
function redirecionar(){
    window.open("https://digitalinnovation.one");//abre o link em outra aba
    window.location.href="https://digitalinnovation.one";//abre o link na mesma aba
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Me obedeça mesmo"
    //alert("Trocar texto")
    elemento.innerHTML ="Me obedeça mesmo";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui"
    elemento.innerHTM ="Passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}



/*function soma(n1,n2){
    return n1 + n2;
}*/

/*var count=0;
while(count<5){
    console.log(count);
    count = count++;
}*/

/*var idade= prompt("Qual é a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}*/


/*var fruta={nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista =["maçã",  "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);//quantidade de elementos que há na variável "lista"
//console.log(lista.reverse());// inverte os itens da variável lista
//console.log(lista.join(" - "));//separa os elementos da lista --> laranja - pêra - maçã 


/*var nome= "Emilly Victoria";
var n1 = 6;
var n2 = 5;
var frase = "Japão é o melhor time do mundo"
alert (nome + " tem " + idade + " anos");
console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Brasil"))*/