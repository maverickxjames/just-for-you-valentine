import { motion } from "framer-motion";
import VinylSticker from "@/components/VinylSticker";
import Polaroid from "@/components/Polaroid";
import photo6 from "@/assets/photo6.jpg";
import photo7 from "@/assets/photo7.jpg";
import photo8 from "@/assets/photo8.jpg";
import photo9 from "@/assets/photo9.jpg";

const FinalScreen = () => {
  const photos = [
    { src: photo6, rotation: -8, delay: 0.3 },
    { src: photo7, rotation: 5, delay: 0.5 },
    { src: photo8, rotation: -3, delay: 0.7 },
    { src: photo9, rotation: 6, delay: 0.9 },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-8 gradient-romantic overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Floating hearts background */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        >
          <span className="text-rose/40" style={{ fontSize: 10 + Math.random() * 20 }}>
            {Math.random() > 0.5 ? "💕" : "✨"}
          </span>
        </motion.div>
      ))}

      {/* Main sticker - heart eyes */}
      <motion.div
        className="mb-6"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <VinylSticker stickerIndex={8} size={120} className="sticker" />
      </motion.div>

      {/* Main message */}
      <motion.div
        className="text-center mb-8 z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="text-4xl md:text-5xl font-script text-rose mb-4">
          Happy Valentine's Day
        </h1>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-4xl">❤️</span>
        </motion.div>
      </motion.div>

      {/* Photo collage with hanging effect */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            {/* String */}
            <motion.div
              className="absolute -top-6 left-1/2 w-px h-6 bg-rose/40"
              style={{ transform: "translateX(-50%)" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: photo.delay }}
            />
            <Polaroid
              imageSrc={photo.src}
              rotation={photo.rotation}
              delay={photo.delay}
              hanging
            />
          </div>
        ))}
      </motion.div>

      {/* Closing message */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="font-body text-foreground/70 text-lg mb-2">
          Made with love, just for you
        </p>
        <motion.div
          className="flex justify-center gap-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, type: "spring" }}
        >
          {["💖", "💕", "💗", "💕", "💖"].map((heart, i) => (
            <motion.span
              key={i}
              className="text-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.5,
                delay: i * 0.15,
                repeat: Infinity,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Additional sticker decorations */}
      <motion.div
        className="absolute bottom-8 left-4 opacity-70"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
      >
        <VinylSticker stickerIndex={15} size={70} className="animate-sticker-bounce" />
      </motion.div>

      <motion.div
        className="absolute top-8 right-4 opacity-70"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.1 }}
      >
        <VinylSticker stickerIndex={0} size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-6 opacity-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.3 }}
      >
        <VinylSticker stickerIndex={14} size={50} />
      </motion.div>
    </motion.div>
  );
};

export default FinalScreen;
