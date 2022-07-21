//Usando o splice para retirar Rita e Diogo da lista e acrescentar Rodrigo no lugar

const chamada = ['Ana', 'Rita', 'Diogo', 'Aline', 'Bernardo', 'Heloisa'];

chamada.splice(1, 2, 'Rodrigo');

console.log(`A lista de chamada atualizada é: ${chamada}`);

//Atualmente a lista de chamada está assim: [Ana,Rodrigo,Aline,Bernardo,Heloisa]
//Usando o splice para apenas inserir um novo nome (Mayra) na lista entre Rodrigo e Aline

chamada.splice(2, 0, 'Mayra');
console.log(`A lista de chamada atualizada é: ${chamada}`);