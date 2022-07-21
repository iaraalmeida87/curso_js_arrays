//Com uma lista de alunos e uma outra lista com as médias temos que criar uma terceira lista com duas dimensões: os nomes e as médias dos alunos

const alunos = ['Geovana', 'Anderson', 'Gabriela', 'Pedro'];
const notas = [8, 7, 9, 10];

const alunosENotas = [alunos, notas];

console.log(`${alunosENotas[0][0]} sua nota média final é ${alunosENotas[1][0]}`);