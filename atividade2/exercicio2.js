function criarMatriz(linhas, colunas) {
    let matriz = new Array(linhas);
    for (let i = 0; i < linhas; i++)
        matriz[i] = new Array(colunas);
    return matriz;
}

function preencherMatriz(matriz) {
    const linhas = matriz.length, colunas = matriz[0].length;
    for (let i = 0; i < linhas; i++)
        for (let j = 0; j < colunas; j++)
            matriz[i][j] = Math.floor(Math.random() * 10);
}

function calcularTransposta(matriz) {
    const linhas = matriz.length, colunas = matriz[0].length;
    let transposta = criarMatriz(colunas, linhas);
    for (let i = 0; i < linhas; i++)
        for (let j = 0; j < colunas; j++)
            transposta[j][i] = matriz[i][j];
    return transposta;
}

function imprimirMatriz(matriz) {
    const linhas = matriz.length, colunas = matriz[0].length;
    for (let i = 0; i < linhas; i++)
        console.log(matriz[i].join('\t'));
}

const linhasA = 2, colunasA = 3;
let matrizA = criarMatriz(linhasA, colunasA);
preencherMatriz(matrizA);

console.log("Matriz A:");
imprimirMatriz(matrizA);

let transpostaA = calcularTransposta(matrizA);
console.log("\nMatriz Transposta de A:");
imprimirMatriz(transpostaA);
