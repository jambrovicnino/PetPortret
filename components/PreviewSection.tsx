
import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, RefreshCw, AlertCircle, Camera, Check } from 'lucide-react';
import { PetPortraitConfig } from '../types';
import { generatePortrait } from '../services/geminiService';

interface PreviewSectionProps {
  config: PetPortraitConfig;
  updateConfig: (updates: Partial<PetPortraitConfig>) => void;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ config, updateConfig }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progressText, setProgressText] = useState("Preparing canvases...");

  const generate = useCallback(async () => {
    if (!config.originalImage || !config.style) return;
    
    setLoading(true);
    setError(null);
    setProgressText("Initializing AI Artists...");
    
    try {
      // We'll generate 3 variations to simulate the "4-5 variant images" requested
      // though we do them one by one or in a loop
      const variations: string[] = [];
      
      const steps = [
        "Analyzing pet features...",
        "Applying brushstrokes...",
        "Refining textures...",
        "Finalizing masterpiece..."
      ];

      for(let i=0; i < 3; i++) {
        setProgressText(steps[i % steps.length]);
        const result = await generatePortrait(config.originalImage, config.style, config.petName);
        variations.push(result);
        // Add variations incrementally so user sees progress
        updateConfig({ generatedImages: [...variations] });
      }
    } catch (err: any) {
      setError(err.message || "Failed to generate portrait. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [config.originalImage, config.style, config.petName, updateConfig]);

  useEffect(() => {
    if (config.generatedImages.length === 0 && !loading && !error) {
      generate();
    }
  }, [generate, config.generatedImages.length, loading, error]);

  const currentPreview = config.generatedImages[config.selectedVariationIndex];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Main Preview / Mockup */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
            {loading && !currentPreview ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 p-12 text-center">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{progressText}</h3>
                <p className="text-slate-500 text-sm">Great art takes time. We're painting your pet's portrait now...</p>
              </div>
            ) : error ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 p-12 text-center">
                <AlertCircle className="text-red-500 mb-4" size={48} />
                <h3 className="text-xl font-bold text-red-900 mb-2">Something went wrong</h3>
                <p className="text-red-600 text-sm mb-6">{error}</p>
                <button 
                  onClick={generate}
                  className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition-all flex items-center gap-2"
                >
                  <RefreshCw size={18} /> Try Again
                </button>
              </div>
            ) : (
              <>
                <img 
                  src={currentPreview} 
                  alt="Pet Portrait Preview" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {loading && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-slate-100">
                    <div className="w-3 h-3 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Generating Variations...</span>
                  </div>
                )}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                   <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 max-w-[70%]">
                      <p className="text-[10px] uppercase font-black text-orange-500 mb-1 tracking-widest">Style: {config.style?.name}</p>
                      <h4 className="font-bold text-slate-900 truncate">{config.petName || 'Your Pet'}</h4>
                   </div>
                   <div className="bg-slate-900/80 backdrop-blur p-3 rounded-full text-white shadow-xl">
                      <Sparkles size={20} />
                   </div>
                </div>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-2xl border border-orange-100">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white flex-shrink-0">
              <Camera size={20} />
            </div>
            <p className="text-sm text-orange-800 font-medium">
              Each portrait is uniquely generated for your pet. Choose your favorite variation below!
            </p>
          </div>
        </div>

        {/* Variations & Controls */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Choose your favorite variation</h3>
            <div className="grid grid-cols-3 gap-4">
              {config.generatedImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => updateConfig({ selectedVariationIndex: idx })}
                  className={`relative aspect-square rounded-xl overflow-hidden border-4 transition-all ${
                    config.selectedVariationIndex === idx ? 'border-orange-500 shadow-lg scale-105' : 'border-white hover:border-slate-200'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Variation ${idx + 1}`} />
                  {config.selectedVariationIndex === idx && (
                    <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center">
                       <Check size={24} className="text-white drop-shadow-md" strokeWidth={4} />
                    </div>
                  )}
                </button>
              ))}
              {loading && config.generatedImages.length < 3 && (
                <div className="aspect-square rounded-xl border-4 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center">
                   <RefreshCw className="text-slate-300 animate-spin" size={24} />
                </div>
              )}
            </div>
            <button 
              onClick={() => {
                updateConfig({ generatedImages: [] });
                generate();
              }}
              disabled={loading}
              className="mt-6 w-full py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-50"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} /> Generate New Options
            </button>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl space-y-4">
            <h4 className="font-bold flex items-center gap-2 text-slate-800">
              <Sparkles size={18} className="text-orange-500" /> Print Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Material</span>
                <span className="font-bold text-slate-900">{config.product?.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Size</span>
                <span className="font-bold text-slate-900">{config.size?.label}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Processing</span>
                <span className="font-bold text-green-600">Ships in 1-2 days</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
               <p className="text-xs text-slate-500 leading-relaxed italic">
                 "Our high-quality inks ensure brilliant colors and remarkable detail, preserving your pet's legacy for years to come."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
