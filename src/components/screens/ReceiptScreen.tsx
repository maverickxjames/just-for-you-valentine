import { motion } from "framer-motion";
import VinylSticker from "@/components/VinylSticker";

interface ReceiptScreenProps {
  onContinue: () => void;
}

const ReceiptScreen = ({ onContinue }: ReceiptScreenProps) => {
  const receiptItems = [
    { label: "Item", value: "You" },
    { label: "Cuteness", value: "Unlimited ∞" },
    { label: "Sweetness", value: "Overload 🍬" },
    { label: "Vibe", value: "Absolutely Perfect" },
    { label: "Smile Effect", value: "Heart-Melting 💕" },
    { label: "Love Received", value: "Maximum" },
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-8 gradient-romantic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sticker decorations */}
      <motion.div
        className="absolute top-6 right-4 opacity-70"
        initial={{ rotate: -20, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <VinylSticker stickerIndex={8} size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-4 opacity-60"
        initial={{ x: -30 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <VinylSticker stickerIndex={0} size={65} />
      </motion.div>

      {/* Receipt card */}
      <motion.div
        className="receipt w-full max-w-sm rounded-lg shadow-card p-6 mx-auto"
        initial={{ y: 50, opacity: 0, rotateX: 20 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center border-b-2 border-dashed border-rose/30 pb-4 mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <span className="text-3xl">❤️</span>
          </motion.div>
          <h2 className="text-2xl font-script text-rose mt-2">OFFICIAL REPORT</h2>
          <p className="text-xs text-muted-foreground font-body mt-1">
            Love Analysis Department
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Certificate #2026-VAL-0214
          </p>
        </div>

        {/* Receipt items */}
        <div className="space-y-3 mb-6">
          {receiptItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex justify-between items-center font-body text-sm"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <span className="text-muted-foreground">{item.label}:</span>
              <span className="text-foreground font-semibold">{item.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-rose/30 my-4" />

        {/* Total */}
        <motion.div
          className="text-center py-3 gradient-love rounded-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <p className="text-white font-body text-sm">TOTAL</p>
          <p className="text-white text-2xl font-script">100% LOVELY</p>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-center text-xs text-muted-foreground mt-4 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ✨ Results verified by the Ministry of Love ✨
        </motion.p>

        {/* Barcode effect */}
        <div className="flex justify-center gap-0.5 mt-4">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="bg-foreground/20"
              style={{
                width: Math.random() > 0.5 ? 2 : 1,
                height: 20 + Math.random() * 10,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.button
        onClick={onContinue}
        className="mt-8 px-8 py-3 gradient-love text-white font-body font-semibold rounded-full shadow-glow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Continue →
      </motion.button>
    </motion.div>
  );
};

export default ReceiptScreen;
