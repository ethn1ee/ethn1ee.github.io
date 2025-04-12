"use client";

import { useEffect, useRef, useState } from "react";

const matrixSize = 100;

const GameOfLife = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentCellRef = useRef({ i: -1, j: -1 });
  const highlightedCellsRef = useRef<
    { i: number; j: number; opacity: number }[]
  >([]);
  const matrixRef = useRef<number[][]>(
    Array.from({ length: matrixSize }, () => Array(matrixSize).fill(0)),
  ); // Use useRef for matrix
  const [alive, setAlive] = useState(0);
  const [cellSize, setCellSize] = useState<number>(0);

  const toggleCell = (i: number, j: number) => {
    if (i < 0 || j < 0 || i >= matrixSize || j >= matrixSize) return;

    const matrix = matrixRef.current;
    matrix[i][j] = matrix[i][j] > 0 ? 0 : 1; // Toggle between 0 and 1
    setAlive((prevAlive) => prevAlive + (matrix[i][j] > 0 ? 1 : -1));
  };

  const generateNext = () => {
    const matrix = matrixRef.current;
    const newMatrix = matrix.map((row, i) =>
      row.map((cell, j) => {
        // Decay every cell by -0.2
        let newValue = cell - 0.5;
        if (newValue < 0) newValue = 0; // Ensure value doesn't go below 0

        // Apply neighbor rules on top of decay
        const neighbors = countNeighbors(matrix, i, j);
        if (cell > 0) {
          // Cell is alive
          if (neighbors === 2 || neighbors === 3) {
            newValue = Math.min(newValue + 0.4, 1); // Increase value slightly
          }
        } else {
          // Cell is dead
          if (neighbors === 3) {
            newValue = Math.min(newValue + 0.3, 1); // Cell is "born" with a smaller boost
          }
        }

        return newValue;
      }),
    );

    // Update the matrix directly
    matrixRef.current = newMatrix;

    // Update the alive count
    const newAlive = newMatrix.flat().filter((cell) => cell > 0).length;
    setAlive(newAlive);
  };

  const countNeighbors = (matrix: number[][], i: number, j: number): number => {
    const offsets = [-1, 0, 1];
    let numNeighbors = 0;

    for (const offset_i of offsets) {
      for (const offset_j of offsets) {
        if (offset_i === 0 && offset_j === 0) continue;
        const neighbor_i = offset_i + i;
        const neighbor_j = offset_j + j;

        if (
          neighbor_i >= 0 &&
          neighbor_j >= 0 &&
          neighbor_i < matrixSize &&
          neighbor_j < matrixSize
        ) {
          numNeighbors += matrix[neighbor_i][neighbor_j] > 0 ? 1 : 0;
        }
      }
    }

    return numNeighbors;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    setCellSize(canvas.width / matrixSize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cellSize === 0) return;

      const mouse = {
        x: e.clientX - canvas.getBoundingClientRect().left,
        y: e.clientY - canvas.getBoundingClientRect().top,
      };

      const hoveredCell = {
        i: Math.floor(mouse.x / cellSize),
        j: Math.floor(mouse.y / cellSize),
      };

      const currentCell = currentCellRef.current;

      if (currentCell.i !== hoveredCell.i || currentCell.j !== hoveredCell.j) {
        toggleCell(hoveredCell.i, hoveredCell.j);
        currentCellRef.current = hoveredCell;
        highlightedCellsRef.current.push({
          i: hoveredCell.i,
          j: hoveredCell.j,
          opacity: 1,
        });
      }
    };

    const drawMatrix = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const matrix = matrixRef.current;
      matrix.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell > 0) {
            ctx.fillStyle = `rgba(150, 150, 150, ${cell})`; // Opacity reflects cell value
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
          }
        });
      });

      highlightedCellsRef.current.forEach((cell) => {
        ctx.fillStyle = `rgba(200, 255, 0, ${cell.opacity})`;
        ctx.fillRect(cell.i * cellSize, cell.j * cellSize, cellSize, cellSize);
        cell.opacity = Math.max(cell.opacity - 0.1, 0);
      });

      highlightedCellsRef.current = highlightedCellsRef.current.filter(
        (cell) => cell.opacity > 0,
      );
    };

    window.addEventListener("resize", drawMatrix);
    window.addEventListener("mousemove", handleMouseMove);

    const intervalId = setInterval(() => {
      drawMatrix();
    }, 100);

    const intervalId2 = setInterval(() => {
      generateNext();
    }, 100);

    drawMatrix();

    return () => {
      window.removeEventListener("resize", drawMatrix);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, [cellSize]);

  return (
    <div
      ref={containerRef}
      className="h-full w-full overflow-hidden pl-10 blur-3xl"
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default GameOfLife;
