"use client";

import { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    clicked: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX - (canvasRef.current?.getBoundingClientRect().left || 0),
        y: e.clientY - (canvasRef.current?.getBoundingClientRect().top || 0),
        clicked: mouse.clicked,
      });

      ctx.fillStyle = "white";
      ctx.fillRect(mouse.x, mouse.y, 5, 5);
    };

    const handleMouseDown = () => {
      setMouse({
        x: mouse.x,
        y: mouse.y,
        clicked: true,
      });
    };

    const handleMouseUp = () => {
      setMouse({
        x: mouse.x,
        y: mouse.y,
        clicked: false,
      });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [mouse, mouse.clicked, mouse.x, mouse.y]);

  return <canvas ref={canvasRef} className="sm:pl-10"></canvas>;
};

export default Canvas;
