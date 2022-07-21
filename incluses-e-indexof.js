const alunos = ['Geovana', 'Anderson', 'Gabriela', 'Pedro'];
const notas = [8, 7, 9, 10];

const alunosENotas = [alunos, notas];

const localizaAluno = (nomedoAluno) => {
    if(alunosENotas[0].includes(nomedoAluno)) {
        const indice = alunosENotas[0].indexOf(nomedoAluno);
        return alunosENotas[0][indice] + ', a sua nota é: ' + alunosENotas[1][indice];
    } else {
        return "Aluno não encontrado";
    }
}
console.log(localizaAluno("Anderson"))