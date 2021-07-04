function botao(){
	//alert("Valeu por clicar");
	document.getElementById("agradecimento").innerHTML = "<b>Valeu</b>";
	console.log(document.getElementById("agradecimento"));
}

function redirect(){
	//window.open("https://www.uol.com.br/"); //abre em uma nova janela
	window.location.href = "https://www.uol.com.br/";// abre na mesma janela do chamador
}

function trocar(elemento){
//	alert("trocar");
	//document.getElementById(elemento).innerHTML = "Passouuu";
	elemento.innerHTML = "Passouuu";	
}

function voltar(elemento){
	elemento.innerHTML = "Voltouuu";	
}

function load(){
	alert("pagina carregada");
}

function mudar(elemento){
	console.log(elemento.value);
}
/*
var nome = "Ceci Alves";
var idade =  5;
var idade2  = 10;
var frase = "Japão é o melhor time do mundo";

alert("Nome "  + nome +  " tem " + idade);
alert (idade + idade2);
console.log(nome);
console.log(idade * idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());


var lista = ["maça","pera","laranja"];
console.log("Primeira letra: " + lista.toString()[0]);
lista.push("uva"); //poe itens
lista.pop("pera");//retira itens
console.log(lista);
console.log(lista.reverse());

console.log(lista.join("|")); //muda o separador da lista


var fruta = [{nome:"maca",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
console.log(fruta);
alert(fruta[1].cor);



var idade = prompt("Qual a sua idade?");

if(idade >= 18){
	alert("maior de idade");
} else {
	alert("menor de idade");
}



var count = 1;

while(count <= 5){
	console.log(count);
	count ++;
}


var count;

for(count = 0; count <= 5; count++){
	console.log(count); //alert(count);
}


var d  = new Date();

alert(d);
alert(d.getMonth() + 1); //mês corrente tem que somar 1;
alert(d.getMinutes());
alert(d.getDay());


function soma(n1,n2){
	return n1 + n2;
}


function setReplace(frase,nome,novo_nome){
	return frase.replace(nome,novo_nome);
}


alert(soma(5,10));

alert(setReplace("Vai Querida Jonh","Jonh","Luanda"));


function validarIdade(idade){
	if (idade >=18){
		return true;
	} else {
		return false;
	}
}

var idad = prompt("Qual sua idade?");
console.log(validarIdade(idad));
*/

