
import React from 'react';
import { X, ArrowLeft, Upload, Palette, SlidersHorizontal, Package, PawPrint, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onClose: () => void;
}

const STEPS = [
  {
    number: '1',
    title: "Upload your pet's photo",
    icon: Upload,
    color: 'bg-orange-500',
    description:
      "Drop a clear, well-lit photo of your pet (JPG or PNG works great). The clearer the face and features, the better the AI results!",
  },
  {
    number: '2',
    title: 'Choose your artistic style',
    icon: Palette,
    color: 'bg-violet-500',
    description:
      "Browse and pick from beautiful styles like Starry Night (vibrant, swirling brushstrokes inspired by Van Gogh), Pop Pet Art (bold colors and patterns like Warhol), Soft Watercolor (dreamy, flowing washes), Geometric Cubism, Renaissance Oil, and many more. Your pet stays perfectly recognizable \u2014 only the artistic look changes!",
  },
  {
    number: '3',
    title: 'Customize & preview',
    icon: SlidersHorizontal,
    color: 'bg-blue-500',
    description:
      "Select your print material (e.g., Gallery Canvas, Modern Metal, Framed, Fine Art Poster), size (from 8\u00d710\" up to 24\u00d736\"), and optionally add your pet's name to blend into the artwork. Generate a free preview to see exactly how it looks.",
  },
  {
    number: '4',
    title: 'Order & enjoy!',
    icon: Package,
    color: 'bg-green-500',
    description:
      "Love it? Place your order for a stunning, gallery-quality print shipped right to you. Perfect as wall art, gifts, or keepsakes.",
  },
];

const HowItWorks: React.FC<HowItWorksProps> = ({ onClose }) => {
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
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-[0.3em]">How It Works</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles size={14} /> Super Simple
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            How It Works
          </h1>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            From photo to fine art in minutes. No design skills needed.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex gap-6 pb-12">
                {/* Vertical connector line */}
                {idx < STEPS.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-slate-200" />
                )}

                {/* Step number circle */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  <Icon size={22} strokeWidth={2.5} />
                </div>

                {/* Step content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Step {step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100">
          <div className="flex justify-center mb-4">
            <PawPrint size={32} className="text-orange-400" />
          </div>
          <p className="text-slate-700 font-semibold text-lg mb-2">
            No design skills needed
          </p>
          <p className="text-slate-500 mb-6">
            Our AI turns your photo into fine art in minutes.
          </p>
          <button
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Sparkles size={18} /> Start Creating Your Masterpiece
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
