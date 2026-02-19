
import React from 'react';
import { PetPortraitConfig, ProductType, ProductSize } from '../types';
import { PRODUCTS, SIZES } from '../constants';
import { Box, Layers, Image as ImageIcon, Type } from 'lucide-react';
import FramedArt, { FRAME_OPTIONS } from './FramedArt';

interface ProductSelectorProps {
  config: PetPortraitConfig;
  updateConfig: (updates: Partial<PetPortraitConfig>) => void;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ config, updateConfig }) => {
  return (
    <div className="space-y-12">
      {/* Product Type */}
      <section>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Box className="text-orange-500" size={24} /> 1. Select Material
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className={`p-1 rounded-2xl border-4 transition-all cursor-pointer ${
                config.product?.id === prod.id ? 'border-orange-500 bg-white shadow-lg' : 'border-transparent bg-white hover:border-slate-100'
              }`}
              onClick={() => {
                if (prod.id === 'framed-canvas') {
                  updateConfig({ product: prod, frameType: 'classic' });
                } else {
                  updateConfig({ product: prod, frameType: undefined });
                }
              }}
            >
              <img src={prod.image} alt={prod.name} className="w-full h-40 object-cover rounded-xl mb-4" />
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-slate-900">{prod.name}</h4>
                  <span className="text-orange-600 font-bold text-sm">From ${prod.basePrice}</span>
                </div>
                <p className="text-xs text-slate-500">{prod.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frame Picker (only when Framed Canvas is selected) */}
      {config.product?.id === 'framed-canvas' && (
        <section className="animate-fadeIn">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ImageIcon className="text-orange-500" size={24} /> Choose Your Frame
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FRAME_OPTIONS.map((frame) => (
              <div
                key={frame.id}
                className={`p-4 rounded-2xl border-4 transition-all cursor-pointer text-center ${
                  config.frameType === frame.id
                    ? 'border-orange-500 bg-white shadow-lg'
                    : 'border-transparent bg-white hover:border-slate-100'
                }`}
                onClick={() => updateConfig({ frameType: frame.id })}
              >
                {/* Frame preview: small colored square with the frame style */}
                <div className="mx-auto mb-3 w-20 h-20 rounded-md overflow-hidden">
                  <FramedArt
                    src="https://picsum.photos/seed/framepreview/100/100"
                    alt={`${frame.name} frame preview`}
                    frameType={frame.id}
                    className="w-full"
                  />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{frame.name}</h4>
                <p className="text-xs text-slate-500 mt-1">{frame.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sizing */}
      <section>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Layers className="text-orange-500" size={24} /> 2. Choose Size
        </h3>
        <div className="flex flex-wrap gap-4">
          {SIZES.map((size) => (
            <button
              key={size.label}
              className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${
                config.size?.label === size.label
                  ? 'border-orange-500 bg-orange-50 text-orange-600'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
              }`}
              onClick={() => updateConfig({ size })}
            >
              {size.label}
              <span className="block text-[10px] font-normal opacity-70">
                ${((config.product?.basePrice || 0) * size.multiplier).toFixed(2)}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Personalization */}
      <section>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Type className="text-orange-500" size={24} /> 3. Add Pet's Name (Optional)
        </h3>
        <div className="max-w-md">
          <input
            type="text"
            placeholder="e.g. Buddy, Luna, Max..."
            className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-semibold"
            value={config.petName}
            onChange={(e) => updateConfig({ petName: e.target.value })}
          />
          <p className="mt-2 text-xs text-slate-400">Our artists will incorporate the name into the final artwork style.</p>
        </div>
      </section>
    </div>
  );
};

export default ProductSelector;
