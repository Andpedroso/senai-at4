//CADASTRO EM EVENTOS.
//1. Verificar se a data do evento é maior do que a data atual.
let dataEvento = 12
let dataAtual = 10
if (dataEvento>dataAtual){
    console.log("Data válida.")
}else{
    console.log("O cadastro não será permitido por data inválida.")
}
//2. Verificar se a idade do interessado é maior do que 18 anos.
let idade = 19
if(idade>18){
    console.log("Maior de 18 anos.")
}else{
    console.log("O evento não é permitido para menores de idade.")
}
//3. Gerar lista de participantes.
let listaParticipantes = [
    "Participante 1","Participante 2","Participante 3","Participante 4","Participante 5",
    "Participante 6","Participante 7","Participante 8","Participante 9","Participante 10",
]
//4. Verificar se o número de participantes é menor do que 100.
if(listaParticipantes.length<100){
    console.log("Caso a data seja válida e a idade do interessado seja maior de 18 anos, cadastrado.")
}else{
    console.log("O cadastro não é permitido, pois o limite de participantes foi excedido.")
}
