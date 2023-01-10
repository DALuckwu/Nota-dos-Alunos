const alunos = [
    {nome: 'Igor', nota: 7.9},
    {nome: 'Alice', nota: 9.7},
    {nome: 'Caio', nota: 5.8},
    {nome: 'Maria Clara', nota:6.8}
];

function alunosNaMedia (array, mediaFinal){
    const aprovados = [];    

    for(let i=0;i<array.length;i++){
        const { nota, nome } = array[i];
        
        if(nota>=mediaFinal){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosNaMedia(alunos, 7));