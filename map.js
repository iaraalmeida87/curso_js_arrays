//Nesse exemplo o aluno recebeu um ponto extra em cada nota que ele tinha, lembrando que a nota máxima não pode ultrapassar 10

const notas = [10, 9, 8, 7, 6];

const notasComPontoExtra = notas.map( nota => nota == 10 ? nota : ++nota)

console.log(notasComPontoExtra)