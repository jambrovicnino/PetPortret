
import React from 'react';
import { X, ArrowLeft } from 'lucide-react';

interface GalleryProps {
  onClose: () => void;
}

const GALLERY_ITEMS = [
  {
    src: '/examples/warhol-cat.jpg',
    label: 'Pop Art',
    artist: 'Andy Warhol Style',
    color: 'bg-pink-500',
  },
  {
    src: '/examples/vangogh-cat.jpg',
    label: 'Oil Painting',
    artist: 'Vincent van Gogh Style',
    color: 'bg-amber-500',
  },
  {
    src: '/examples/original-cat.jpg',
    label: 'Original Photo',
    artist: 'The Starting Point',
    color: 'bg-slate-500',
  },
  {
    src: '/examples/cartoon-cat.jpg',
    label: 'Cartoon',
    artist: 'Animated Style',
    color: 'bg-green-500',
  },
  {
    src: '/examples/watercolor-cat.jpg',
    label: 'Watercolor',
    artist: 'Soft Watercolor Style',
    color: 'bg-blue-500',
  },
];

const Gallery: React.FC<GalleryProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[90] bg-white overflow-y-auto">
      {/* Header Bar */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-slate-100 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-semibold"
          >
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest">Styles</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Gallery Grid - Asymmetric Mood Board Layout */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-3 grid-rows-2 gap-6 auto-rows-fr" style={{ gridTemplateRows: 'auto auto' }}>

          {/* Top Left - Warhol Pop Art */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="aspect-square overflow-hidden">
              <img
                src={GALLERY_ITEMS[0].src}
                alt={GALLERY_ITEMS[0].artist}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className={`inline-block ${GALLERY_ITEMS[0].color} text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1`}>
                {GALLERY_ITEMS[0].label}
              </span>
              <p className="text-white font-bold text-sm">{GALLERY_ITEMS[0].artist}</p>
            </div>
          </div>

          {/* Top Center - Original Photo (Large, spans full height) */}
          <div className="row-span-2 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="h-full overflow-hidden">
              <img
                src={GALLERY_ITEMS[2].src}
                alt={GALLERY_ITEMS[2].artist}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className={`inline-block ${GALLERY_ITEMS[2].color} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2`}>
                {GALLERY_ITEMS[2].label}
              </span>
              <p className="text-white font-bold">{GALLERY_ITEMS[2].artist}</p>
            </div>
          </div>

          {/* Top Right - Van Gogh */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="aspect-square overflow-hidden">
              <img
                src={GALLERY_ITEMS[1].src}
                alt={GALLERY_ITEMS[1].artist}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className={`inline-block ${GALLERY_ITEMS[1].color} text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1`}>
                {GALLERY_ITEMS[1].label}
              </span>
              <p className="text-white font-bold text-sm">{GALLERY_ITEMS[1].artist}</p>
            </div>
          </div>

          {/* Bottom Left - Cartoon */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="aspect-square overflow-hidden">
              <img
                src={GALLERY_ITEMS[3].src}
                alt={GALLERY_ITEMS[3].artist}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className={`inline-block ${GALLERY_ITEMS[3].color} text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1`}>
                {GALLERY_ITEMS[3].label}
              </span>
              <p className="text-white font-bold text-sm">{GALLERY_ITEMS[3].artist}</p>
            </div>
          </div>

          {/* Bottom Right - Watercolor */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className="aspect-square overflow-hidden">
              <img
                src={GALLERY_ITEMS[4].src}
                alt={GALLERY_ITEMS[4].artist}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className={`inline-block ${GALLERY_ITEMS[4].color} text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1`}>
                {GALLERY_ITEMS[4].label}
              </span>
              <p className="text-white font-bold text-sm">{GALLERY_ITEMS[4].artist}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
