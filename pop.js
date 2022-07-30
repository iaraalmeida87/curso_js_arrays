//Utilizando o pop para retirar o último número da array notas e recalcular a média

const notas = [10 ,7 ,8, 5, 10]
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}`)