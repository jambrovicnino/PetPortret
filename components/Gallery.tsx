
import React, { useEffect, useRef } from 'react';
import { X, ArrowLeft } from 'lucide-react';

export type GallerySection = 'styles' | 'metal-prints' | 'posters' | null;

interface GalleryProps {
  onClose: () => void;
  scrollToSection?: GallerySection;
}

/* Reusable gallery card */
const GalleryCard: React.FC<{
  src: string;
  alt: string;
  label: string;
  sublabel: string;
  color: string;
  aspect?: string;
  className?: string;
}> = ({ src, alt, label, sublabel, color, aspect = 'aspect-square', className = '' }) => (
  <div className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white ${className}`}>
    <img
      src={src}
      alt={alt}
      className={`w-full ${aspect} object-cover transition-transform duration-700 group-hover:scale-105`}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
      <span className={`inline-block ${color} text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1`}>
        {label}
      </span>
      <p className="text-white font-bold text-sm">{sublabel}</p>
    </div>
  </div>
);

/* Section heading */
const SectionHeading: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-black text-slate-900 mb-1">{title}</h3>
    <p className="text-slate-400 text-sm">{subtitle}</p>
  </div>
);

const Gallery: React.FC<GalleryProps> = ({ onClose, scrollToSection }) => {
  const stylesRef = useRef<HTMLDivElement>(null);
  const metalRef = useRef<HTMLDivElement>(null);
  const postersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollToSection) return;
    const timer = setTimeout(() => {
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        'styles': stylesRef,
        'metal-prints': metalRef,
        'posters': postersRef,
      };
      const target = refMap[scrollToSection];
      target?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(timer);
  }, [scrollToSection]);

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
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-[0.3em]">Gallery</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-5xl">

        {/* ═══════════════════════════════════════════
            SECTION 1: STYLES
            ═══════════════════════════════════════════ */}
        <div ref={stylesRef} id="gallery-styles" className="scroll-mt-20" />
        <SectionHeading title="Styles" subtitle="See how your pet transforms across different artistic styles" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Warhol Pop Art */}
          <GalleryCard
            src="/examples/warhol-cat.png"
            alt="Andy Warhol Pop Art Style"
            label="Pop Art"
            sublabel="Andy Warhol Style"
            color="bg-pink-500"
          />

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
          <GalleryCard
            src="/examples/vangogh-cat.png"
            alt="Vincent van Gogh Style"
            label="Oil Painting"
            sublabel="Vincent van Gogh Style"
            color="bg-amber-500"
          />

          {/* Cartoon */}
          <GalleryCard
            src="/examples/cartoon-cat.jpg"
            alt="Cartoon Animated Style"
            label="Cartoon"
            sublabel="Animated Style"
            color="bg-green-500"
          />

          {/* Watercolor */}
          <GalleryCard
            src="/examples/watercolor-cat.jpg"
            alt="Soft Watercolor Style"
            label="Watercolor"
            sublabel="Soft Watercolor Style"
            color="bg-blue-500"
          />
        </div>

        {/* Renaissance standalone */}
        <div className="mb-5 max-w-md mx-auto">
          <GalleryCard
            src="/examples/renaissance-cat.jpg"
            alt="Renaissance Oil Painting Style"
            label="Renaissance"
            sublabel="Classical Oil Painting Style"
            color="bg-purple-500"
            aspect="aspect-[4/5]"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 my-14" />

        {/* ═══════════════════════════════════════════
            SECTION 2: METAL PRINTS
            ═══════════════════════════════════════════ */}
        <div ref={metalRef} id="gallery-metal-prints" className="scroll-mt-20" />
        <SectionHeading title="Metal Prints" subtitle="Sleek Dibond aluminum with a high-gloss finish for a modern gallery look" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Metal - Warhol */}
          <GalleryCard
            src="/examples/metal/warhol-metal.jpg"
            alt="Warhol Pop Art on Metal Print"
            label="Pop Art"
            sublabel="Metal Print"
            color="bg-pink-500"
          />

          {/* Metal - Cartoon */}
          <GalleryCard
            src="/examples/metal/cartoon-metal.jpg"
            alt="Cartoon Style on Metal Print"
            label="Cartoon"
            sublabel="Metal Print"
            color="bg-green-500"
          />

          {/* Metal - Van Gogh Starry Night */}
          <GalleryCard
            src="/examples/metal/vangogh-starry-metal.jpg"
            alt="Van Gogh Starry Night on Metal Print"
            label="Starry Night"
            sublabel="Metal Print"
            color="bg-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto mb-5">
          {/* Metal - Van Gogh close-up */}
          <GalleryCard
            src="/examples/metal/vangogh-close-metal.jpg"
            alt="Van Gogh Style Close-up on Metal Print"
            label="Oil Painting"
            sublabel="Metal Print"
            color="bg-amber-500"
            aspect="aspect-[4/5]"
          />

          {/* Metal - Watercolor */}
          <GalleryCard
            src="/examples/metal/watercolor-metal.jpg"
            alt="Watercolor Style on Metal Print"
            label="Watercolor"
            sublabel="Metal Print"
            color="bg-blue-500"
            aspect="aspect-[4/5]"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 my-14" />

        {/* ═══════════════════════════════════════════
            SECTION 3: POSTERS
            ═══════════════════════════════════════════ */}
        <div ref={postersRef} id="gallery-posters" className="scroll-mt-20" />
        <SectionHeading title="Posters" subtitle="Premium semi-gloss fine art paper, perfect for framing" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <GalleryCard
            src="/examples/warhol-cat.png"
            alt="Pop Art Poster"
            label="Pop Art"
            sublabel="Fine Art Poster"
            color="bg-pink-500"
          />
          <GalleryCard
            src="/examples/vangogh-cat.png"
            alt="Van Gogh Poster"
            label="Oil Painting"
            sublabel="Fine Art Poster"
            color="bg-amber-500"
          />
          <GalleryCard
            src="/examples/watercolor-cat.jpg"
            alt="Watercolor Poster"
            label="Watercolor"
            sublabel="Fine Art Poster"
            color="bg-blue-500"
          />
        </div>

      </div>
    </div>
  );
};

export default Gallery;
