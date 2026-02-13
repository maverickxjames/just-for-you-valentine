import { useState } from "react";
import { motion } from "framer-motion";
import VinylSticker from "@/components/VinylSticker";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";

interface FavoriteCardsScreenProps {
  onContinue: () => void;
}

interface CardData {
  id: number;
  frontImage: string;
  backMessage: string;
  rotation: number;
  color: string;
}

const FavoriteCardsScreen = ({ onContinue }: FavoriteCardsScreenProps) => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const cards: CardData[] = [

    {
      id: 2,
      frontImage: photo3,
      backMessage: "The way you laugh makes everything better 💕",
      rotation: 3,
      color: "hsl(25 100% 92%)",
    },
    {
      id: 3,
      frontImage: photo1,
      backMessage: "Your kindness inspires me every day 🌸",
      rotation: -2,
      color: "hsl(270 67% 94%)",
    },
    {
      id: 4,
      frontImage: photo4,
      backMessage: "You make ordinary moments magical ✨",
      rotation: 4,
      color: "hsl(350 100% 94%)",
    },
    {
      id: 5,
      frontImage: photo5,
      backMessage: "Being with you feels like home 💖",
      rotation: -3,
      color: "hsl(25 100% 92%)",
    },
  ];

  const toggleCard = (id: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col relative px-4 py-8 gradient-romantic overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hanging string decoration at top */}
      <div className="absolute top-0 left-0 right-0 h-16 flex justify-around items-start pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-px bg-rose/30"
            style={{ height: 20 + i * 10 }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Sticker decoration */}
      <motion.div
        className="absolute top-4 right-2 opacity-60 z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <VinylSticker stickerIndex={6} size={55} />
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-2 opacity-60 z-20"
        initial={{ x: -30 }}
        animate={{ x: 0 }}
      >
        <VinylSticker stickerIndex={9} size={60} />
      </motion.div>

      {/* Header */}
      <motion.div
        className="text-center mt-4 mb-6 relative z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-3xl font-script text-rose">My favorite things</h2>
        <p className="text-muted-foreground font-body text-sm mt-1">about you</p>
      </motion.div>

      {/* Cards grid */}
      <div className="flex-1 grid grid-cols-2 gap-4 max-w-md mx-auto w-full place-content-start">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`flip-card cursor-pointer ${flippedCards.has(card.id) ? "flipped" : ""}`}
            style={{ perspective: 1000 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            onClick={() => toggleCard(card.id)}
          >
            <div
              className="flip-card-inner relative w-full"
              style={{ aspectRatio: "3/4", transformStyle: "preserve-3d" }}
            >
              {/* Front - Polaroid style */}
              <div
                className="flip-card-front absolute inset-0 polaroid rounded-sm"
                style={{ transform: `rotate(${card.rotation}deg)`, backfaceVisibility: "hidden" }}
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={card.frontImage}
                    alt="Memory"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-6" />
              </div>

              {/* Back - Message */}
              <div
                className="flip-card-back absolute inset-0 rounded-xl shadow-card flex items-center justify-center p-4"
                style={{
                  backgroundColor: card.color,
                  transform: `rotateY(180deg) rotate(${-card.rotation}deg)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-center font-body text-sm text-foreground/80 leading-relaxed">
                  {card.backMessage}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Instruction */}
      <motion.p
        className="text-center text-muted-foreground text-sm font-body mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        💝 Tap the cards to flip them
      </motion.p>

      {/* Continue button */}
      <motion.button
        onClick={onContinue}
        className="mt-4 mx-auto px-8 py-3 gradient-love text-white font-body font-semibold rounded-full shadow-glow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        One more thing →
      </motion.button>
    </motion.div>
  );
};

export default FavoriteCardsScreen;
