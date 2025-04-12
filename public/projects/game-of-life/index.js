// Defining number of cells
const matrixWidth = 100;
const matrixHeight = Math.ceil(
  (matrixWidth * window.innerHeight) / window.innerWidth,
);

let matrix = Array.from({ length: matrixWidth }, () =>
  Array.from({ length: matrixHeight }, () => {
    return false;
  }),
);

let cellSize = 0;
let highlightedCells = [];
let alive = 0;
let currentCell = {
  i: -1,
  j: -1,
};

const canvas =
  /** @type {HTMLCanvasElement} */ document.getElementById("matrix");

/**
 * @type {CanvasRenderingContext2D}
 */
let ctx;

/**
 *
 * @param {number} i
 * @param {number} j
 */
function toggleCell(i, j) {
  if (i < 0 || j < 0 || i >= matrixWidth || j >= matrixHeight) return;

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

  const aliveElement = document.getElementById("stat-alive");
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
        neighbor_i >= matrixWidth ||
        neighbor_j >= matrixHeight
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

function draw() {
  ctx = canvas.getContext("2d");

  drawMatrix();
  window.addEventListener("resize", drawMatrix);

  window.addEventListener("mousemove", handleMouseMove);
}

function drawMatrix() {
  // Resize based on window size
  const container = document.getElementById("matrix-container");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  cellSize = canvas.width / matrixWidth;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell) {
        ctx.fillStyle = "white";
        ctx.strokeStyle = "rgba(255, 255, 255, 0)";
        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    });
  });

  highlightedCells = highlightedCells.filter((cell) => cell.opacity > 0);
  highlightedCells.forEach((cell) => {
    ctx.fillStyle = `rgba(200, 255, 0, ${cell.opacity})`;
    ctx.fillRect(cell.i * cellSize, cell.j * cellSize, cellSize, cellSize);
    cell.opacity -= 0.1;
  });
}

/**
 *
 * @param {MouseEvent} e
 */
function handleMouseMove(e) {
  const mouse = {
    x: e.clientX,
    y: e.clientY,
  };

  const hoveredCell = {
    i: Math.max(Math.floor(mouse.x / cellSize), 0),
    j: Math.max(Math.floor(mouse.y / cellSize), 0),
  };

  if (currentCell.i !== hoveredCell.i || currentCell.j !== hoveredCell.j) {
    toggleCell(hoveredCell.i, hoveredCell.j);
    toggleCell(hoveredCell.i - 1, hoveredCell.j);
    toggleCell(hoveredCell.i + 1, hoveredCell.j);
    toggleCell(hoveredCell.i, hoveredCell.j - 1);
    toggleCell(hoveredCell.i, hoveredCell.j + 1);
    currentCell = hoveredCell;

    // Add the hovered cell and its neighbors to the highlightedCells array
    highlightedCells.push({ i: hoveredCell.i, j: hoveredCell.j, opacity: 1 });
    highlightedCells.push({
      i: hoveredCell.i - 1,
      j: hoveredCell.j,
      opacity: 1,
    });
    highlightedCells.push({
      i: hoveredCell.i + 1,
      j: hoveredCell.j,
      opacity: 1,
    });
    highlightedCells.push({
      i: hoveredCell.i,
      j: hoveredCell.j - 1,
      opacity: 1,
    });
    highlightedCells.push({
      i: hoveredCell.i,
      j: hoveredCell.j + 1,
      opacity: 1,
    });
  }
}

draw();
setInterval(drawMatrix, 10); // Redraw the canvas every 50ms
