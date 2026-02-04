import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingPetals from "@/components/FloatingPetals";
import OpeningScreen from "@/components/screens/OpeningScreen";
import MeasuringScreen from "@/components/screens/MeasuringScreen";
import ReceiptScreen from "@/components/screens/ReceiptScreen";
import FavoriteCardsScreen from "@/components/screens/FavoriteCardsScreen";
import LoveLetterScreen from "@/components/screens/LoveLetterScreen";
import FinalScreen from "@/components/screens/FinalScreen";

type Screen = "opening" | "measuring" | "receipt" | "cards" | "letter" | "final";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("opening");

  const renderScreen = () => {
    switch (currentScreen) {
      case "opening":
        return <OpeningScreen onStart={() => setCurrentScreen("measuring")} />;
      case "measuring":
        return <MeasuringScreen onComplete={() => setCurrentScreen("receipt")} />;
      case "receipt":
        return <ReceiptScreen onContinue={() => setCurrentScreen("cards")} />;
      case "cards":
        return <FavoriteCardsScreen onContinue={() => setCurrentScreen("letter")} />;
      case "letter":
        return <LoveLetterScreen onContinue={() => setCurrentScreen("final")} />;
      case "final":
        return <FinalScreen />;
      default:
        return <OpeningScreen onStart={() => setCurrentScreen("measuring")} />;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <FloatingPetals />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
