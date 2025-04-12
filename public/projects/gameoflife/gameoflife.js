export const matrixSize = 100;
export let matrix = Array.from({ length: matrixSize }, () =>
  Array.from({ length: matrixSize }, () => {
    return false;
  })
);
let alive = 0;

/**
 *
 * @param {number} i
 * @param {number} j
 */
export function toggleCell(i, j) {
  if (i < 0 || j < 0 || i >= matrixSize || j >= matrixSize) return;

  if (matrix[i][j]) {
    alive -= 1;
  } else {
    alive += 1;
  }
  matrix[i][j] = !matrix[i][j];
}

function generateNext() {
  const newMatrix = matrix.map((row) => row.map((cell) => cell));
  let born = 0;
  let died = 0;

  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      newMatrix[i][j] = checkNeighbors(i, j);
      if (cell && !newMatrix[i][j]) died += 1;
      else if (!cell && newMatrix[i][j]) born += 1;
    });
  });

  matrix = newMatrix;
  alive += born - died;

  const aliveElement = document.getElementById('stat-alive');
  aliveElement.textContent = `Alive: ${alive}`;
}

/**
 *
 * @param {number} i
 * @param {number} j
 * @returns {boolean}
 */
function checkNeighbors(i, j) {
  const offsets = [-1, 0, 1];
  let numNeighbors = 0;

  offsets.forEach((offset_i) => {
    offsets.forEach((offset_j) => {
      if (offset_i === 0 && offset_j === 0) return;
      const neighbor_i = offset_i + i;
      const neighbor_j = offset_j + j;

      if (
        neighbor_i < 0 ||
        neighbor_j < 0 ||
        neighbor_i >= matrixSize ||
        neighbor_j >= matrixSize
      )
        return;

      numNeighbors += matrix[neighbor_i][neighbor_j] ? 1 : 0;
    });
  });

  if (matrix[i][j]) {
    return numNeighbors === 2 || numNeighbors === 3;
  } else {
    return numNeighbors === 3;
  }
}

generateNext();
setInterval(generateNext, 100);
