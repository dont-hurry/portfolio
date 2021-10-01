import { useEffect } from "react";

const CANVAS_SIZE = 270;
const BLOCKS_PER_LINE = 6;

const START_ANGLE = [0, 0.5, 1.5, 1];
const END_ANGLE = [0.5, 1, 0, 1.5];
const COLORS = ["#763DF2", "#A37EF2", "#05C7F2", "#F2CD5E", "#F29B30"];

export default function Canvas() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    drawCanvas(ctx);
  }, []);

  const drawCanvas = (ctx) => {
    for (let i = 0; i < BLOCKS_PER_LINE; i++) {
      for (let j = 0; j < BLOCKS_PER_LINE; j++) {
        if (Math.random() < 0.75) drawBlock(ctx, i, j);
      }
    }
  };

  const drawBlock = (ctx, row, col) => {
    const blockSize = CANVAS_SIZE / BLOCKS_PER_LINE;
    const direction = Math.floor(Math.random() * 4);

    const x = blockSize * (col + (direction % 2));
    const y = blockSize * (row + Math.floor(direction / 2));

    const startAngle = START_ANGLE[direction] * Math.PI;
    const endAngle = END_ANGLE[direction] * Math.PI;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + blockSize * (direction % 2 === 0 ? 1 : -1), y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + blockSize * (direction < 2 ? 1 : -1));
    ctx.moveTo(x, y);
    ctx.arc(x, y, blockSize, startAngle, endAngle);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
  };

  const getRandomColor = () =>
    COLORS[Math.floor(Math.random() * COLORS.length)];

  return <canvas width={CANVAS_SIZE} height={CANVAS_SIZE} />;
}
