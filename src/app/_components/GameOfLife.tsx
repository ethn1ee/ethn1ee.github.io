"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import LinkButton from "@/components/global/LinkButton";

const GameOfLife = () => {
  // Configs
  const rowSize = 40;
  const colSize = 40;
  const refreshRate = 200;
  const enableRandomGenerate = false;

  const [cellSize, setCellSize] = useState<number>(0); // Adjusted based on screen size
  const [alive, setAlive] = useState<number>(0);
  const [visibleCells, setVisibleCells] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const [grid, setGrid] = useState<boolean[][]>(
    Array.from({ length: rowSize }, () =>
      Array.from({ length: colSize }, () => {
        if (!enableRandomGenerate) return false;

        const random = Math.random();
        return random > 0.8;
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
      const actualRowSize = currentGrid.length;
      const actualColSize = currentGrid[0]?.length || 0;

      let currentAlive = 0;

      for (let row = 0; row < actualRowSize; row++) {
        // using actualRowSize to prevent grid not syncing and row and col going out of bounds
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
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;

      const containerRect = ref.current.getBoundingClientRect();
      const newCellSize = Math.floor((containerRect.width - 40) / colSize); // account for sidebar width 40px
      setCellSize(newCellSize);

      console.log(containerRect.width - 40, containerRect.height);

      const newVisibleCells = Math.min(
        rowSize * colSize,
        Math.ceil(
          ((containerRect.width - 40) * containerRect.height) /
            (newCellSize * newCellSize),
        ),
      );
      setVisibleCells(newVisibleCells);
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
              animate={{ backgroundColor: cell ? "#aaaaaaff" : "#aaaaaa00" }}
              transition={{ duration: 0 }}
              className="h-4 w-4"
              onMouseEnter={() => toggleCell(rowIndex, colIndex)}
            ></motion.div>
          ))}
        </div>
      ))}

      <div className="absolute right-4 bottom-4 hidden flex-col items-end gap-2 leading-none tracking-tight text-gray-200 sm:right-10 sm:bottom-10 md:flex">
        <LinkButton
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
          animate={false}
        >
          GAME OF LIFE
        </LinkButton>
        <span>
          ALIVE: {alive} / {visibleCells}
        </span>
        <div className="h-[2px] w-full bg-gray-300">
          <motion.div
            animate={{ width: (alive / visibleCells) * 96 }}
            className="h-full w-full bg-white"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default GameOfLife;
