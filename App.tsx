
import React, { useState } from 'react';
import {
  Camera,
  Palette,
  Box,
  CheckCircle2,
  ShoppingBag,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Info
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FileUpload from './components/FileUpload';
import StyleSelector from './components/StyleSelector';
import ProductSelector from './components/ProductSelector';
import PreviewSection from './components/PreviewSection';
import CheckoutModal from './components/CheckoutModal';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import { AppStep, PetPortraitConfig } from './types';
import { ART_STYLES, PRODUCTS, SIZES } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('upload');
  const [config, setConfig] = useState<PetPortraitConfig>({
    petName: '',
    style: ART_STYLES[0],
    product: PRODUCTS[0],
    size: SIZES[0],
    originalImage: null,
    generatedImages: [],
    selectedVariationIndex: 0,
  });
  const [showCheckout, setShowCheckout] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const goHome = () => {
    setStep('upload');
    setShowGallery(false);
    setShowHowItWorks(false);
    setShowCheckout(false);
  };

  const handleImageUpload = (base64: string) => {
    setConfig(prev => ({ ...prev, originalImage: base64 }));
    setStep('style');
  };

  const updateConfig = (updates: Partial<PetPortraitConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (step === 'upload') setStep('style');
    else if (step === 'style') setStep('options');
    else if (step === 'options') setStep('preview');
    else if (step === 'preview') setShowCheckout(true);
  };

  const prevStep = () => {
    if (step === 'style') setStep('upload');
    else if (step === 'options') setStep('style');
    else if (step === 'preview') setStep('options');
  };

  const steps: { key: AppStep; label: string; icon: React.ReactNode }[] = [
    { key: 'upload', label: 'Upload', icon: <Camera size={18} /> },
    { key: 'style', label: 'Art Style', icon: <Palette size={18} /> },
    { key: 'options', label: 'Options', icon: <Box size={18} /> },
    { key: 'preview', label: 'Preview', icon: <Sparkles size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Header
        onHomeClick={goHome}
        onHowItWorksClick={() => { setShowHowItWorks(true); setShowGallery(false); }}
        onGalleryClick={() => { setShowGallery(true); setShowHowItWorks(false); }}
      />
      
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        {/* Progress Stepper (Hidden on Landing) */}
        {step !== 'upload' && (
          <div className="flex items-center justify-center mb-12 animate-fadeIn">
            {steps.map((s, idx) => (
              <React.Fragment key={s.key}>
                <div 
                  className={`flex flex-col items-center gap-2 relative z-10 transition-colors ${
                    step === s.key ? 'text-orange-500' : idx < steps.findIndex(st => st.key === step) ? 'text-green-500' : 'text-slate-400'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step === s.key ? 'border-orange-500 bg-orange-50 scale-110' : idx < steps.findIndex(st => st.key === step) ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-white'
                  }`}>
                    {idx < steps.findIndex(st => st.key === step) ? <CheckCircle2 size={20} /> : s.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider">{s.label}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-2 -mt-6 transition-colors ${idx < steps.findIndex(st => st.key === step) ? 'bg-green-500' : 'bg-slate-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          {step === 'upload' && (
            <div className="text-center animate-fadeIn py-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} /> AI-Powered Masterpieces
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 leading-[1.1]">
                Turn your pet into <span className="text-orange-500 italic">fine art.</span>
              </h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Upload a clear photo of your pet. Natural lighting and clear features work best for AI masterpieces.
              </p>
              
              <FileUpload onUpload={handleImageUpload} />
              
              <div className="mt-8 flex items-center justify-center gap-6 text-slate-400 font-medium">
                <div className="flex items-center gap-2"><Info size={16} /> JPG or PNG</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Free AI Preview</div>
              </div>
            </div>
          )}

          {step === 'style' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Choose an Artistic Style</h2>
                <p className="text-slate-600">How should your pet's portrait feel?</p>
              </div>
              <StyleSelector 
                selectedStyle={config.style} 
                onSelect={(style) => updateConfig({ style })} 
              />
              <div className="mt-10 flex justify-between">
                <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
                  <ChevronLeft size={20} /> Back to Home
                </button>
                <button 
                  onClick={nextStep} 
                  disabled={!config.style}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 disabled:opacity-50"
                >
                  Configure Prints <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}

          {step === 'options' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Configure Your Order</h2>
                <p className="text-slate-600">Select material, size, and personalization.</p>
              </div>
              <ProductSelector config={config} updateConfig={updateConfig} />
              <div className="mt-10 flex justify-between">
                <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
                  <ChevronLeft size={20} /> Back to Styles
                </button>
                <button 
                  onClick={nextStep} 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
                >
                  Generate Preview <Sparkles size={20} />
                </button>
              </div>
            </div>
          )}

          {step === 'preview' && (
            <div className="animate-fadeIn">
              <PreviewSection config={config} updateConfig={updateConfig} />
              <div className="mt-10 flex justify-between items-center bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
                  <ChevronLeft size={20} /> Back to Options
                </button>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Total Price</p>
                  <p className="text-2xl font-bold text-slate-900">
                    ${((config.product?.basePrice || 0) * (config.size?.multiplier || 1)).toFixed(2)}
                  </p>
                </div>
                <button 
                  onClick={nextStep} 
                  disabled={config.generatedImages.length === 0}
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 disabled:opacity-50"
                >
                  Add to Cart <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      {showGallery && <Gallery onClose={() => setShowGallery(false)} />}
      {showHowItWorks && <HowItWorks onClose={() => setShowHowItWorks(false)} />}
      {showCheckout && <CheckoutModal config={config} onClose={() => setShowCheckout(false)} />}
    </div>
  );
};

export default App;
