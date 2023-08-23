function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length, colunasA = matrizA[0].length;
    const linhasB = matrizB.length, colunasB = matrizB[0].length;

    if (colunasA !== linhasB) return null;

    let matrizC = new Array(linhasA);
    for (let i = 0; i < linhasA; i++) {
        matrizC[i] = new Array(colunasB);
        for (let j = 0; j < colunasB; j++) {
            matrizC[i][j] = 0;
            for (let k = 0; k < colunasA; k++) {
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizC;
}

function imprimirMatriz(matriz) {
    const linhas = matriz.length, colunas = matriz[0].length;
    for (let i = 0; i < linhas; i++) console.log(matriz[i].join('\t'));
}

const matrizA = [[1, 3], [2, 5]];
const matrizB = [[2, 2], [0, 1]];

console.log("Matriz A:");
imprimirMatriz(matrizA);

console.log("\nMatriz B:");
imprimirMatriz(matrizB);

const matrizC = multiplicarMatrizes(matrizA, matrizB);
if (matrizC !== null) {
    console.log("\nMatriz Resultante (C = AxB):");
    imprimirMatriz(matrizC);
}
