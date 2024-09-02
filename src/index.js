// You should implement your task here.

module.exports = function towelSort(matrix) {
    let rez = [];
    if (matrix === undefined) {
        return [];
    } else if (matrix === []) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                matrix[i] = matrix[i].reverse();
            }
            rez.push(...matrix[i]);
        }
        return rez;
    }
};
