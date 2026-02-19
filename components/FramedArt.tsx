
import React from 'react';

interface FramedArtProps {
  src: string;
  alt: string;
  className?: string;
  frameType?: 'classic' | 'modern' | 'gold';
}

const FramedArt: React.FC<FramedArtProps> = ({ src, alt, className = "", frameType = 'classic' }) => {
  const frameStyles = {
    classic: "border-[16px] border-[#2d241e] shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(0,0,0,0.5)]",
    modern: "border-[8px] border-slate-900 shadow-2xl",
    gold: "border-[20px] border-[#d4af37] shadow-[0_25px_60px_rgba(0,0,0,0.4),inset_0_0_15px_rgba(255,255,255,0.3)] border-double"
  };

  return (
    <div className={`relative inline-block ${frameStyles[frameType]} rounded-sm bg-white p-1 overflow-hidden ${className}`}>
      {/* Passe-partout (Matting) effect */}
      <div className="bg-[#fdfcf0] p-4 shadow-inner">
        <img src={src} alt={alt} className="w-full h-full object-cover shadow-sm" />
      </div>
      {/* Reflection Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/20 opacity-40"></div>
    </div>
  );
};

export default FramedArt;
