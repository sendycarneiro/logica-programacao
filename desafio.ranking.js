//adicionando a function
function ranqueadas(vitorias, derrotas) {
    
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário ";
    } else {
        nivel = "Imortal"
    }
}
//Declração das variaveis 
let vitorias = 50;
let derrotas = 10;
//Soma das variaveis
const resultado = ranqueadas(vitorias, derrotas);

//Mensagem de saída
console.log(`O Herói tem um saldo de ${vitorias} vitórias está no nível ${nivel}!`);