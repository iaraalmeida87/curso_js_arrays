//Usar o filter para exibir quais alunos foram reprovados

const nomes = ['Marta', 'Igor', 'Heitor', 'Regiane'];
const notas = [8, 4, 5, 6];

const reprovados = nomes.filter( (_, indice) => notas[indice] < 5);

console.log(`Reprovados: ${reprovados}`)