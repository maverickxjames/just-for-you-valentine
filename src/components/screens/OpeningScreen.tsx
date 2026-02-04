import { motion } from "framer-motion";
import HeartButton from "../HeartButton";
import VinylSticker from "../VinylSticker";

interface OpeningScreenProps {
  onStart: () => void;
}

const OpeningScreen = ({ onStart }: OpeningScreenProps) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative px-6 gradient-romantic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative stickers */}
      <motion.div
        className="absolute top-8 left-4 opacity-70"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <VinylSticker stickerIndex={8} size={70} className="animate-sticker-bounce" />
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-4 opacity-70"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <VinylSticker stickerIndex={15} size={80} className="animate-sticker-bounce" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-8 opacity-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, type: "spring" }}
      >
        <VinylSticker stickerIndex={4} size={50} />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="text-center mb-8"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl text-rose mb-4 drop-shadow-sm">
          Just for you
        </h1>
        <motion.p
          className="text-muted-foreground text-lg font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          A special surprise awaits ✨
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
      >
        <HeartButton onClick={onStart} size={100} />
      </motion.div>

      <motion.p
        className="mt-8 text-muted-foreground text-sm font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Tap to open 💝
      </motion.p>

      {/* Subtle sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-rose rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </motion.div>
  );
};

export default OpeningScreen;
