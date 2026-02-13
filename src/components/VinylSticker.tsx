import sticker0 from "@/assets/stickers/sticker0.jpg";
import sticker1 from "@/assets/stickers/hug-cute.gif";
import sticker2 from "@/assets/stickers/38ffa4616c7e43522afa0d3569fb522b.gif";
import sticker3 from "@/assets/stickers/play-fight.gif";
import sticker4 from "@/assets/stickers/85311f39e674454dfc7fc12fd6ce01d7.gif";
import sticker5 from "@/assets/stickers/panda-gemoy.gif";
import sticker6 from "@/assets/stickers/f4744b0f44511dd36cca40dc50cb4042.gif";
import sticker7 from "@/assets/stickers/3da78fb207a3c9a377135a856ff131f3.gif";
import sticker8 from "@/assets/stickers/Love-Gif-Image-1.gif";
import sticker9 from "@/assets/stickers/d8b97168488fdb3eb9533da493c8fa95.gif";
import sticker10 from "@/assets/stickers/ily-milo-milo.gif";
import sticker11 from "@/assets/stickers/c06860b058d7aadaa28874be0a723947.gif";
import sticker12 from "@/assets/stickers/f1dee268a52a1fc6d4332741b8ec5add.gif";
import sticker13 from "@/assets/stickers/hug-cute.gif";
import sticker14 from "@/assets/stickers/hug-cute.gif";
import sticker15 from "@/assets/stickers/panda-gemoy.gif";
import sticker16 from "@/assets/stickers/hug-cute.gif";
import sticker17 from "@/assets/stickers/hug-cute.gif";

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
