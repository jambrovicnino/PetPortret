
import React from 'react';
import { Check } from 'lucide-react';
import { ArtStyle } from '../types';
import { ART_STYLES } from '../constants';

interface StyleSelectorProps {
  selectedStyle: ArtStyle | null;
  onSelect: (style: ArtStyle) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ART_STYLES.map((style) => (
        <div 
          key={style.id}
          className={`group relative overflow-hidden rounded-2xl border-4 transition-all cursor-pointer ${
            selectedStyle?.id === style.id ? 'border-orange-500 shadow-xl scale-[1.02]' : 'border-white hover:border-orange-200'
          }`}
          onClick={() => onSelect(style)}
        >
          <img 
            src={style.thumbnail} 
            alt={style.name}
            className="w-full h-48 object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="p-4 bg-white">
            <h4 className="font-bold text-lg text-slate-900">{style.name}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{style.description}</p>
          </div>
          
          {selectedStyle?.id === style.id && (
            <div className="absolute top-4 right-4 bg-orange-500 text-white p-1 rounded-full shadow-lg">
              <Check size={16} strokeWidth={3} />
            </div>
          )}
          
          <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  );
};

export default StyleSelector;
