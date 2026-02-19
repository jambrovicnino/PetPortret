
import React from 'react';
import { FrameType } from '../types';

interface FramedArtProps {
  src: string;
  alt: string;
  className?: string;
  frameType?: FrameType;
}

export const FRAME_OPTIONS: { id: FrameType; name: string; description: string; borderPreview: string }[] = [
  { id: 'classic', name: 'Classic Dark Wood', description: 'Traditional dark wood with inner shadow', borderPreview: '#2d241e' },
  { id: 'modern', name: 'Sleek Modern', description: 'Minimal black contemporary frame', borderPreview: '#1e293b' },
  { id: 'gold', name: 'Ornate Gold', description: 'Luxurious double-border gold frame', borderPreview: '#d4af37' },
  { id: 'rustic', name: 'Rustic Wood', description: 'Warm weathered wood finish', borderPreview: '#8B7355' },
];

const FramedArt: React.FC<FramedArtProps> = ({ src, alt, className = "", frameType = 'classic' }) => {
  const frameStyles: Record<FrameType, string> = {
    classic: "border-[16px] border-[#2d241e] shadow-[0_20px_50px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(0,0,0,0.5)]",
    modern: "border-[8px] border-slate-900 shadow-2xl",
    gold: "border-[20px] border-[#d4af37] shadow-[0_25px_60px_rgba(0,0,0,0.4),inset_0_0_15px_rgba(255,255,255,0.3)] border-double",
    rustic: "border-[14px] border-[#8B7355] shadow-[0_15px_40px_rgba(0,0,0,0.25),inset_0_0_10px_rgba(0,0,0,0.3)]"
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
