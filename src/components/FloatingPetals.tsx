import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: "petal" | "heart";
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 15; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 6,
          size: 10 + Math.random() * 15,
          rotation: Math.random() * 360,
          type: Math.random() > 0.7 ? "heart" : "petal",
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: "-20px",
          }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: petal.rotation + 360,
            x: [0, 30, -20, 40, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {petal.type === "heart" ? (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="hsl(350 80% 65% / 0.6)"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <div
              className="rounded-full"
              style={{
                width: petal.size,
                height: petal.size * 0.6,
                background: `linear-gradient(135deg, hsl(350 100% 85% / 0.7), hsl(25 100% 88% / 0.7))`,
                transform: `rotate(${petal.rotation}deg)`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPetals;
