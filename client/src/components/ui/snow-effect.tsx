import { useEffect, useRef } from 'react';

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  sway: number;
  swaySpeed: number;
  swayAmount: number;
}

export function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Установка размера canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Инициализация снежинок
    const initSnowflakes = () => {
      snowflakesRef.current = [];
      const snowflakeCount = Math.floor((window.innerWidth * window.innerHeight) / 10000);

      for (let i = 0; i < snowflakeCount; i++) {
        snowflakesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          sway: 0,
          swaySpeed: Math.random() * 0.01 + 0.005,
          swayAmount: Math.random() * 30 + 20,
        });
      }
    };
    initSnowflakes();

    // Анимация
    const animate = () => {
      // Очистка canvas с полупрозрачностью для эффекта следа
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Рисование снежинок
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();

      snowflakesRef.current.forEach((flake) => {
        // Обновление позиции
        flake.y += flake.speed;
        flake.sway += flake.swaySpeed;
        flake.x += Math.sin(flake.sway) * 0.1;

        // Сброс позиции, если снежинка упала за нижний край
        if (flake.y > canvas.height) {
          flake.y = -10;
          flake.x = Math.random() * canvas.width;
        }

        // Сброс x, если вышла за границы
        if (flake.x > canvas.width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = canvas.width;
        }

        // Рисование снежинки как круга
        ctx.globalAlpha = flake.opacity;
        ctx.fillRect(flake.x, flake.y, flake.size, flake.size);
      });

      ctx.globalAlpha = 1;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Обработка изменения размера окна
    const handleResize = () => {
      resizeCanvas();
      initSnowflakes();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
