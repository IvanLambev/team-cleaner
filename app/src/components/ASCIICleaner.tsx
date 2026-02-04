import { useEffect, useRef } from 'react';

const ASCIICleaner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  // ASCII art frames for a cleaning person with broom
  const frames = [
    `
      🧹
     /|
    / |
   /  |
  /   |
 👤   |
/||\\  |
 ||   |
/  \\  |
    `,
    `
       🧹
      /|
     / |
    /  |
   /   |
  👤   |
 /||\\  |
  ||   |
 /  \\  |
    `,
    `
        🧹
       /|
      / |
     /  |
    /   |
   👤   |
  /||\\  |
   ||   |
  /  \\  |
    `,
    `
       🧹
      /|
     / |
    /  |
   /   |
  👤   |
 /||\\  |
  ||   |
 /  \\  |
    `,
  ];

  // Sparkle positions
  const sparkles = ['✨', '⭐', '💫', '✦', '◆'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = 300;
      canvas.height = 400;
    };
    resizeCanvas();

    // Particle system for sparkles
    const particles: Array<{
      x: number;
      y: number;
      char: string;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }> = [];

    const createParticle = (x: number, y: number) => {
      particles.push({
        x,
        y,
        char: sparkles[Math.floor(Math.random() * sparkles.length)],
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 2 - 1,
        life: 0,
        maxLife: 60 + Math.random() * 40,
        size: 12 + Math.random() * 8,
      });
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get current frame
      const currentFrame = frames[Math.floor(frameRef.current / 15) % frames.length];
      
      // Draw ASCII character
      ctx.font = '16px monospace';
      ctx.fillStyle = '#10B981';
      const lines = currentFrame.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, 80, 80 + i * 18);
      });

      // Create sparkles from broom position
      const broomX = 120 + Math.sin(frameRef.current * 0.05) * 30;
      const broomY = 100;
      
      if (frameRef.current % 5 === 0) {
        createParticle(broomX + Math.random() * 40, broomY + Math.random() * 60);
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.vy += 0.05; // gravity

        const alpha = 1 - (p.life / p.maxLife);
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.font = `${p.size}px Arial`;
        ctx.fillStyle = '#10B981';
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      // Draw floor line
      ctx.strokeStyle = '#E5E7EB';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(20, 350);
      ctx.lineTo(280, 350);
      ctx.stroke();

      // Draw dust particles on floor
      ctx.fillStyle = '#D1D5DB';
      for (let i = 0; i < 5; i++) {
        const dustX = 50 + i * 45 + Math.sin(frameRef.current * 0.02 + i) * 10;
        ctx.beginPath();
        ctx.arc(dustX, 360 + Math.random() * 10, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      frameRef.current++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={300}
        height={400}
        className="w-full max-w-[250px] h-auto"
      />
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10B981]/10 to-transparent pointer-events-none rounded-2xl" />
    </div>
  );
};

export default ASCIICleaner;
