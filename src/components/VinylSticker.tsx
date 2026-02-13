import sticker0 from "@/assets/stickers/sticker0.jpg";
import sticker1 from "@/assets/stickers/sticker1.jpg";
import sticker2 from "@/assets/stickers/sticker2.jpg";
import sticker3 from "@/assets/stickers/sticker3.jpg";
import sticker4 from "@/assets/stickers/sticker4.jpg";
import sticker5 from "@/assets/stickers/sticker5.jpg";
import sticker6 from "@/assets/stickers/sticker6.jpg";
import sticker7 from "@/assets/stickers/sticker7.jpg";
import sticker8 from "@/assets/stickers/sticker8.jpg";
import sticker9 from "@/assets/stickers/sticker9.jpg";
import sticker10 from "@/assets/stickers/sticker10.jpg";
import sticker11 from "@/assets/stickers/sticker11.jpg";
import sticker12 from "@/assets/stickers/sticker12.jpg";
import sticker13 from "@/assets/stickers/sticker13.jpg";
import sticker14 from "@/assets/stickers/sticker14.jpg";
import sticker15 from "@/assets/stickers/sticker15.jpg";
import sticker16 from "@/assets/stickers/sticker16.jpg";
import sticker17 from "@/assets/stickers/sticker17.jpg";

interface VinylStickerProps {
  stickerIndex: number;
  className?: string;
  size?: number;
}

// Add more sticker images here as needed
const stickerImages: { [key: number]: string } = {
  0: sticker0,   // laughing
  1: sticker1,   // angry
  2: sticker2,   // crying
  3: sticker3,   // thinking
  4: sticker4,   // blushing
  5: sticker5,   // sleepy
  6: sticker6,   // pointing
  7: sticker7,   // shocked
  8: sticker8,   // heart eyes
  9: sticker9,   // excited
  10: sticker10, // dreaming
  11: sticker11, // worried
  12: sticker12, // surprised
  13: sticker13, // shy
  14: sticker14, // happy wave
  15: sticker15, // dancing
  16: sticker16, // hungry thought
  17: sticker17, // skeptical
};

const VinylSticker = ({ stickerIndex, className = "", size = 100 }: VinylStickerProps) => {
  const src = stickerImages[stickerIndex] || stickerImages[0];

  return (
    <div
      className={`sticker ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={`Vinyl sticker ${stickerIndex}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default VinylSticker;
