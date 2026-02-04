import { motion } from "framer-motion";

interface HeartButtonProps {
  onClick: () => void;
  size?: number;
}

const HeartButton = ({ onClick, size = 120 }: HeartButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative animate-pulse-glow rounded-full p-4"
      style={{ width: size + 32, height: size + 32 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="absolute inset-0 rounded-full gradient-love opacity-20 blur-xl" />
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="relative z-10"
        animate={{ scale: [1, 1.1, 1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(350 90% 55%)" />
            <stop offset="100%" stopColor="hsl(350 80% 65%)" />
          </linearGradient>
          <filter id="heartGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="url(#heartGradient)"
          filter="url(#heartGlow)"
        />
      </motion.svg>
    </motion.button>
  );
};

export default HeartButton;
