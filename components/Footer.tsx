
import React from 'react';
import { Instagram, Twitter, Facebook, Heart } from 'lucide-react';

interface FooterProps {
  onProductClick?: (section: 'styles' | 'metal-prints' | 'posters') => void;
}

const Footer: React.FC<FooterProps> = ({ onProductClick }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">PetPortrait</h3>
            <p className="text-sm leading-relaxed mb-6">
              Empowering pet lovers to celebrate their furry friends through high-quality AI-driven art and premium prints.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onProductClick?.('styles')} className="hover:text-white transition-colors text-left">Gallery Canvas</button></li>
              <li><button onClick={() => onProductClick?.('metal-prints')} className="hover:text-white transition-colors text-left">Metal Prints</button></li>
              <li><button onClick={() => onProductClick?.('posters')} className="hover:text-white transition-colors text-left">Posters</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-xs mb-4">Get 10% off your first order when you join our pack!</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 PetPortrait AI. All rights reserved.</p>
          <p className="flex items-center gap-1">Made with <Heart size={12} className="text-red-500" /> for pets everywhere.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
