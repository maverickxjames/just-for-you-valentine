import stickersImage from "@/assets/stickers.jpg";

interface VinylStickerProps {
  stickerIndex: number;
  className?: string;
  size?: number;
}

// Grid positions for each sticker (row, col) - 6 rows, 3 cols
const stickerPositions: { [key: number]: { row: number; col: number } } = {
  0: { row: 0, col: 0 }, // laughing
  1: { row: 0, col: 1 }, // angry
  2: { row: 0, col: 2 }, // crying
  3: { row: 1, col: 0 }, // thinking
  4: { row: 1, col: 1 }, // blushing
  5: { row: 1, col: 2 }, // sleepy
  6: { row: 2, col: 0 }, // pointing
  7: { row: 2, col: 1 }, // shocked
  8: { row: 2, col: 2 }, // heart eyes
  9: { row: 3, col: 0 }, // excited
  10: { row: 3, col: 1 }, // dreaming
  11: { row: 3, col: 2 }, // worried
  12: { row: 4, col: 0 }, // surprised
  13: { row: 4, col: 1 }, // shy
  14: { row: 4, col: 2 }, // happy wave
  15: { row: 5, col: 0 }, // dancing
  16: { row: 5, col: 1 }, // hungry thought
  17: { row: 5, col: 2 }, // skeptical
};

const VinylSticker = ({ stickerIndex, className = "", size = 100 }: VinylStickerProps) => {
  const position = stickerPositions[stickerIndex] || { row: 0, col: 0 };
  
  // Each sticker is roughly 33.33% of width and 16.67% of height
  const clipWidth = 33.33;
  const clipHeight = 16.67;

  return (
    <div
      className={`sticker overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        style={{
          width: size * 3,
          height: size * 6,
          marginLeft: -position.col * size,
          marginTop: -position.row * size,
        }}
      >
        <img
          src={stickersImage}
          alt="Vinyl sticker"
          className="w-full h-full object-cover"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default VinylSticker;
