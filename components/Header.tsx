
import React from 'react';
import { Dog } from 'lucide-react';

interface HeaderProps {
  onHomeClick?: () => void;
  onHowItWorksClick?: () => void;
  onGalleryClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onHowItWorksClick, onGalleryClick }) => {
  return (
    <header className="bg-white border-b border-slate-100 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-md">
            <Dog size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 leading-none">PetPortrait</h1>
            <p className="text-[10px] uppercase tracking-widest font-bold text-orange-500">Gallery Art</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={onHomeClick}
            className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={onHowItWorksClick}
            className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors"
          >
            How it works
          </button>
          <button
            onClick={onGalleryClick}
            className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors"
          >
            Gallery
          </button>
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors">Reviews</a>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-all">
            My Account
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
