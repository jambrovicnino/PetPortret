
import React from 'react';
import { X, ArrowLeft } from 'lucide-react';

interface GalleryProps {
  onClose: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[90] bg-slate-50 overflow-y-auto">
      {/* Header Bar */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-slate-100 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-semibold"
          >
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-[0.3em]">Styles</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-10 max-w-5xl">

        {/* Row 1: Warhol | Original (tall) | Van Gogh */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Warhol Pop Art */}
          <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white">
            <img
              src="/examples/warhol-cat.png"
              alt="Andy Warhol Pop Art Style"
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block bg-pink-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1">Pop Art</span>
              <p className="text-white font-bold text-sm">Andy Warhol Style</p>
            </div>
          </div>

          {/* Original Photo - tall center piece */}
          <div className="row-span-2 group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white">
            <img
              src="/examples/original-cat.jpg"
              alt="Original Cat Photo"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block bg-slate-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1">Original</span>
              <p className="text-white font-bold">The Starting Point</p>
            </div>
          </div>

          {/* Van Gogh */}
          <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white">
            <img
              src="/examples/vangogh-cat.png"
              alt="Vincent van Gogh Style"
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1">Oil Painting</span>
              <p className="text-white font-bold text-sm">Vincent van Gogh Style</p>
            </div>
          </div>

          {/* Cartoon */}
          <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white">
            <img
              src="/examples/cartoon-cat.jpg"
              alt="Cartoon Animated Style"
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block bg-green-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1">Cartoon</span>
              <p className="text-white font-bold text-sm">Animated Style</p>
            </div>
          </div>

          {/* center column already taken by row-span-2 original */}

          {/* Watercolor */}
          <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white">
            <img
              src="/examples/watercolor-cat.jpg"
              alt="Soft Watercolor Style"
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block bg-blue-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1">Watercolor</span>
              <p className="text-white font-bold text-sm">Soft Watercolor Style</p>
            </div>
          </div>
        </div>

        {/* Row 3: Renaissance full width */}
        <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white max-w-md mx-auto">
          <img
            src="/examples/renaissance-cat.jpg"
            alt="Renaissance Oil Painting Style"
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="inline-block bg-purple-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1">Renaissance</span>
            <p className="text-white font-bold text-sm">Classical Oil Painting Style</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
