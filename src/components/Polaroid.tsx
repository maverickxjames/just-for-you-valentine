import { motion } from "framer-motion";

interface PolaroidProps {
  imageSrc: string;
  caption?: string;
  rotation?: number;
  delay?: number;
  hanging?: boolean;
}

const Polaroid = ({ imageSrc, caption, rotation = 0, delay = 0, hanging = false }: PolaroidProps) => {
  return (
    <motion.div
      className={`polaroid rounded-sm ${hanging ? "polaroid-hanging" : ""}`}
      style={{
        rotate: rotation,
        animationDelay: `${delay}s`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      {hanging && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-rose/40" />
      )}
      <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden">
        <img
          src={imageSrc}
          alt={caption || "Photo"}
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <p className="text-xs text-center mt-2 text-foreground/70 font-body">
          {caption}
        </p>
      )}
    </motion.div>
  );
};

export default Polaroid;
