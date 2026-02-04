import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import VinylSticker from "@/components/VinylSticker";

interface MeasuringScreenProps {
  onComplete: () => void;
}

const MeasuringScreen = ({ onComplete }: MeasuringScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Initializing...");

  useEffect(() => {
    const messages = [
      "Initializing cuteness detector...",
      "Scanning adorableness levels...",
      "Measuring sweetness quotient...",
      "Calculating charm factor...",
      "Analyzing heart-melt potential...",
      "Results incoming... 💖",
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        
        // Update text based on progress
        const messageIndex = Math.floor((newProgress / 100) * (messages.length - 1));
        setText(messages[Math.min(messageIndex, messages.length - 1)]);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return newProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative px-6 gradient-sunset"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sticker decoration */}
      <motion.div
        className="absolute bottom-8 left-4 opacity-60"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <VinylSticker stickerIndex={3} size={70} />
      </motion.div>

      {/* Radar container */}
      <div className="relative w-64 h-64 mb-8">
        {/* Outer rings */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-rose/20"
            style={{
              width: `${100 - i * 20}%`,
              height: `${100 - i * 20}%`,
              left: `${i * 10}%`,
              top: `${i * 10}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}

        {/* Radar sweep */}
        <motion.div
          className="absolute inset-0 origin-center"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, hsl(350 80% 65% / 0.3) 30deg, transparent 60deg)`,
            borderRadius: "50%",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Center heart */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="hsl(350 80% 65%)">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        {/* Blips */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-rose rounded-full"
            style={{
              left: `${40 + Math.cos((i * 120 * Math.PI) / 180) * 35}%`,
              top: `${40 + Math.sin((i * 120 * Math.PI) / 180) * 35}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.6,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-64 mb-4">
        <div className="h-2 bg-rose/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full gradient-love rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>

      {/* Status text */}
      <motion.p
        className="text-foreground/80 font-body text-center"
        key={text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.p>

      <motion.p
        className="mt-2 text-2xl font-script text-rose"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Measuring cuteness...
      </motion.p>
    </motion.div>
  );
};

export default MeasuringScreen;
