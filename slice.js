const nomes = ['Ana','Rita','Diogo','Aline','Bernardo','Heloisa','Livia','Heitor','Dulcy','Vitor','Nathalia','Agatha','Felipe','Valeria','Fernando','Denise','Paulo','Matheus','Angela','Bruna'];

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Os alunos da sala 1 são: ${sala1}`);
console.log(`Os alunos da sala 2 são: ${sala2}`);