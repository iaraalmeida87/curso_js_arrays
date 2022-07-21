//Para imprimir a média das notas usando forEach

const notas = [10, 6.5, 8, 7.5];
let somaNota = 0;

notas.forEach(notas => {
    somaNota += notas
})

let media = somaNota/notas.length

console.log(media)