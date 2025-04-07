"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { myEasing } from "@/components/Easing";

const GameOfLife = () => {
  const rowSize = 40;
  const colSize = 40;
  const refreshRate = 1000;
  const [cellSize, setCellSize] = useState<number>(0);
  const [alive, setAlive] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const [grid, setGrid] = useState<boolean[][]>(
    Array.from({ length: rowSize }, () =>
      Array.from({ length: colSize }, () => {
        const random = Math.random();
        return random > 0.85;
      }),
    ),
  );

  const toggleCell = (row: number, col: number) => {
    const newGrid = grid.map((row) => [...row]);
    newGrid[row][col] = !newGrid[row][col];
    setGrid(newGrid);
  };

  const countNeighbors = (grid: boolean[][], row: number, col: number) => {
    const offsets = [-1, 0, 1];
    let count = 0;

    const actualRowSize = grid.length;
    const actualColSize = grid[0]?.length || 0;

    offsets.forEach((x) => {
      offsets.forEach((y) => {
        if (x === 0 && y === 0) return;

        const newRow = row + x;
        const newCol = col + y;

        if (
          newRow >= 0 &&
          newRow < actualRowSize &&
          newCol >= 0 &&
          newCol < actualColSize
        ) {
          count += grid[newRow][newCol] ? 1 : 0;
        }
      });
    });

    return count;
  };

  const updateGrid = useCallback(() => {
    setGrid((currentGrid) => {
      const newGrid = currentGrid.map((row) => [...row]);
      const actualRowSize = grid.length;
      const actualColSize = grid[0]?.length || 0;

      let currentAlive = 0;

      for (let row = 0; row < actualRowSize; row++) {
        for (let col = 0; col < actualColSize; col++) {
          const neighbors = countNeighbors(currentGrid, row, col);

          if (currentGrid[row][col]) {
            if (neighbors === 2 || neighbors === 3) {
              newGrid[row][col] = true;
              currentAlive++;
            } else {
              newGrid[row][col] = false;
            }
          } else {
            if (neighbors === 3) {
              newGrid[row][col] = true;
              currentAlive++;
            } else {
              newGrid[row][col] = false;
            }
          }
        }
      }

      setAlive(currentAlive);

      return newGrid;
    });
  }, [grid]);

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;

      const containerRect = ref.current.getBoundingClientRect();

      const newCellSize = Math.floor(containerRect.width / colSize);
      setCellSize(newCellSize);
    };

    const intervalId = setInterval(updateGrid, refreshRate);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="size-full overflow-hidden pl-10">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <motion.div
              key={colIndex}
              style={{
                width: cellSize,
                height: cellSize,
              }}
              animate={{ backgroundColor: cell ? "#f6f6f6ff" : "#f6f6f600" }}
              transition={{ duration: 0 }}
              className="h-4 w-4"
              onClick={() => toggleCell(rowIndex, colIndex)}
            ></motion.div>
          ))}
        </div>
      ))}

      <div className="absolute bottom-4 right-4 text-gray-200 sm:bottom-10 sm:right-10">
        ALIVE: {alive} / {rowSize * colSize}
        <div className="h-1 w-full bg-gray-300">
          <motion.div
            animate={{ width: (alive / (rowSize * colSize)) * 96 }}
            transition={{ ease: myEasing }}
            className="h-full w-full bg-white"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default GameOfLife;
