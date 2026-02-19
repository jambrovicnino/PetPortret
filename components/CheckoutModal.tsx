
import React from 'react';
import { X, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { PetPortraitConfig } from '../types';

interface CheckoutModalProps {
  config: PetPortraitConfig;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ config, onClose }) => {
  const price = (config.product?.basePrice || 0) * (config.size?.multiplier || 1);
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-scaleIn">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>
        
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Added to Cart!</h2>
              <p className="text-slate-500 text-sm">Your masterpiece is ready for print.</p>
            </div>
          </div>
          
          <div className="flex gap-4 mb-8 bg-slate-50 p-4 rounded-2xl">
            <img 
              src={config.generatedImages[config.selectedVariationIndex]} 
              className="w-24 h-24 rounded-xl object-cover shadow-sm border border-white"
              alt="Cart Thumbnail"
            />
            <div className="flex flex-col justify-center">
              <h4 className="font-bold text-slate-900">Pet Portrait: {config.petName || 'Unnamed Pet'}</h4>
              <p className="text-xs text-slate-500">{config.style?.name} Style</p>
              <p className="text-xs text-slate-500">{config.product?.name}{config.product?.id === 'framed-canvas' && config.frameType ? ` (${config.frameType} frame)` : ''} • {config.size?.label}</p>
              <p className="text-lg font-bold text-orange-600 mt-1">${price.toFixed(2)}</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Truck size={18} className="text-slate-400" />
              <span>Fast Worldwide Shipping (Free over $100)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <ShieldCheck size={18} className="text-slate-400" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition-all">
              Go to Checkout
            </button>
            <button onClick={onClose} className="w-full bg-white text-slate-600 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all border border-slate-200">
              Continue Shopping
            </button>
          </div>
        </div>
        
        <div className="bg-slate-50 py-4 px-8 border-t border-slate-100 flex justify-center gap-6">
           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 opacity-50" alt="Paypal" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 opacity-50" alt="Visa" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 opacity-50" alt="Mastercard" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
