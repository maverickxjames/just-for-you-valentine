import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VinylSticker from "@/components/VinylSticker";

interface LoveLetterScreenProps {
  onContinue: () => void;
}

const LoveLetterScreen = ({ onContinue }: LoveLetterScreenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const letterContent = `
Dear You,

From the moment you came into my life, everything changed. Your smile, your laughter, the way you make even the simplest moments feel special – it all means the world to me.

Every day with you is a gift I never knew I needed. You've taught me what it means to love and be loved, to laugh without holding back, and to dream bigger than I ever thought possible.

You're not just someone I love – you're my best friend, my safe place, my favorite person. Thank you for being exactly who you are.

Forever yours,
With all my love 💕
  `.trim();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-8 gradient-sunset"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Sticker decoration */}
      <motion.div
        className="absolute top-8 left-4 opacity-60"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <VinylSticker stickerIndex={4} size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-4 opacity-60"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <VinylSticker stickerIndex={13} size={55} />
      </motion.div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Envelope */
          <motion.div
            key="envelope"
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Envelope body */}
            <div className="relative w-72 h-48">
              {/* Back */}
              <div className="absolute inset-0 bg-peach rounded-lg shadow-card" />
              
              {/* Flap */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-24 origin-top"
                style={{
                  background: "linear-gradient(135deg, hsl(25 80% 85%), hsl(350 60% 85%))",
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                }}
                animate={{ rotateX: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Heart seal */}
              <motion.div
                className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-12 h-12 rounded-full gradient-love shadow-glow flex items-center justify-center">
                  <span className="text-white text-xl">💌</span>
                </div>
              </motion.div>

              {/* Front flap overlap */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20 bg-peach-dark/30 rounded-b-lg"
                style={{
                  clipPath: "polygon(0 100%, 50% 20%, 100% 100%)",
                }}
              />
            </div>

            <motion.p
              className="text-center mt-6 text-rose font-script text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tap to read letter
            </motion.p>
          </motion.div>
        ) : (
          /* Opened letter */
          <motion.div
            key="letter"
            className="w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-cream rounded-xl shadow-card p-6 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-30">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M100 0 L100 100 L0 100 Z"
                    fill="hsl(350 80% 65% / 0.2)"
                  />
                </svg>
              </div>

              {/* Letter content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-script text-rose mb-4">For you,</h3>
                <p className="font-body text-foreground/80 text-sm leading-relaxed whitespace-pre-line">
                  {letterContent}
                </p>
              </motion.div>

              {/* Bottom decoration */}
              <motion.div
                className="flex justify-center gap-2 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {["💕", "✨", "💖", "✨", "💕"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue button - only show when letter is open */}
      {isOpen && (
        <motion.button
          onClick={onContinue}
          className="mt-8 px-8 py-3 gradient-love text-white font-body font-semibold rounded-full shadow-glow"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          One last thing →
        </motion.button>
      )}
    </motion.div>
  );
};

export default LoveLetterScreen;
