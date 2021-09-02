// Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
let matrix_1 = [[10,5,6,7,9,10],[4,5,23,13,43],[12,45,53,23,12,45],[12,4,6,7,3,12,45]];
let matrix_2 = [[1,2,3,4,5],[6,7,8],[12,45,37,97,90,0,12],[23,123,-4,-5],[0,1,2,3,7,8,10],[-1,-2,-3],[1,2,3,0.5]];
let avs = [];

function promedios(matrix){
    for(let i = 0; i < matrix.length; i++){
        avs[i] = 0;
        for(let j = 0; j < matrix[i].length; j++ ){
            avs[i] += (matrix[i][j])/matrix[i].length   ;
        }
    }
}
promedios(matrix_1);
console.log(avs);

promedios(matrix_2);
console.log(avs);