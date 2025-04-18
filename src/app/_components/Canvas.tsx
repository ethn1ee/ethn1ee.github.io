"use client";

import { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const animatedRadius = useRef(20);

  const [mouse, setMouse] = useState({
    x: -animatedRadius.current * 2, // set the initial position to out of bounds
    y: -animatedRadius.current * 2,
    clicked: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse((prev) => ({
        ...prev,
        x: e.clientX - (canvasRef.current?.getBoundingClientRect().left || 0),
        y: e.clientY - (canvasRef.current?.getBoundingClientRect().top || 0),
      }));
    };

    const handleMouseDown = () => {
      setMouse((prev) => ({ ...prev, clicked: true }));
    };

    const handleMouseUp = () => {
      setMouse((prev) => ({ ...prev, clicked: false }));
    };

    const handleResize = () => {
      if (canvas.parentElement) {
        const { width, height } = canvas.parentElement.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", handleResize);
    handleResize();

    // Animation loop for smooth radius transition
    const baseRadius = 10;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const targetRadius = mouse.clicked ? baseRadius * 1.5 : baseRadius;
      animatedRadius.current = lerp(animatedRadius.current, targetRadius, 0.15);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, animatedRadius.current, 0, 2 * Math.PI);
      ctx.fillStyle = "#f6f6f6";
      ctx.shadowColor = "#ffd700";
      ctx.shadowBlur = 40;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.fill();
      ctx.closePath();

      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mouse.x, mouse.y, mouse.clicked]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 -z-30 blur-2xl"
      ></canvas>
    </>
  );
};

export default Canvas;
