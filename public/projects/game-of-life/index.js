import { matrixSize, matrix, toggleCell } from './gameoflife.js';

const canvas =
  /** @type {HTMLCanvasElement} */ document.getElementById('matrix');

/**
 * @type {CanvasRenderingContext2D}
 */
let ctx;
let cellSize = canvas.width / matrixSize;
let currentCell = {
  i: -1,
  j: -1,
};

let highlightedCells = [];

function draw() {
  ctx = canvas.getContext('2d');

  drawMatrix();
  window.addEventListener('resize', drawMatrix);

  window.addEventListener('mousemove', handleMouseMove);
}

function drawMatrix() {
  // Resize based on window size
  const container = document.getElementById('matrix-container');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  cellSize = canvas.width / matrixSize;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell) {
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
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
