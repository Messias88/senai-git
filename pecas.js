const listaDePecas = ["Ar condicionado" , "Motor" , "Amortecedor"]

console.log(listaDePecas)

if(listaDePecas.length < 10)  {
    console.log("É possovel cadastarar mais peças")
} else {
    console.log("Não há mais espaçona lista")
}

var peso = 50; 

if (peso > 100) {
    console.log("Peso da peça está adequado");
} else{
    console.log("Peso insuficiente")
}

let nomePeca = "";

if (noemPeca.length > 3) {
    console.log("Nome adequado!!")
} else if (nomePeca.lengh == 0) {
    console.log("O noem não pode ser vazio")
} else {
    console.log("nome  deve possuir mais de 3 caracteres")
}

switch (nomePeca.length) {
    case 0:
        console.log("O nome não pode ser vazio")
        break;

    case 1:
    case 2:
    case 3:   
        console.log("O nome dee possuir mais de 3 caracteres")
        break;
    
    default:
        console.log("Nome adequado!!")
        break;
}

// = -> Atribuição de valor,recebe
// == -> Verificar se o valor é igual
// === -> Verifica se o valor, e o tipo de dado, são iguais 

