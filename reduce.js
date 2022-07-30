//Aqui usarei o reduce para calcular a média de cada turma
const turma1 = [7, 5, 10, 8, 9, 4, 6, 8]
const turma2 = [4, 6, 6, 8, 10]
const turma3 = [7, 6, 8, 7, 5, 10, 3]

function mediaDasTurmas(notas){
    const somaNotas = notas.reduce((acum, atual) => atual + acum, 0)
    return Math.round(somaNotas/notas.length)
}
console.log(`A média final das notas da Turma 1 foi de ${mediaDasTurmas(turma1)}`)
console.log(`A média final das notas da Turma 2 foi de ${mediaDasTurmas(turma2)}`)
console.log(`A média final das notas da Turma 3 foi de ${mediaDasTurmas(turma3)}`)

//Segundo exemplo de uso do reduce
const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma)

//Terceiro exemplo, usando o exercício do arquivo media.js
const notas = [10, 6.5, 8, 7.5]

const media = notas.reduce((acum, atual) => atual + acum,0) /notas.length

console.log(`A média desse aluno foi de: ${media}`)