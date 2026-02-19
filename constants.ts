
import { ArtStyle, ProductType, ProductSize } from './types';

export const ART_STYLES: ArtStyle[] = [
  {
    id: 'van-gogh',
    name: 'Starry Night',
    description: 'Vibrant, swirling brushstrokes in the style of Vincent van Gogh.',
    prompt: 'A masterpiece in the style of Vincent van Gogh. Use swirling brushstrokes, thick impasto textures, and a vibrant color palette of deep blues, yellows, and oranges. Transform the pet into an oil painting that feels like Post-Impressionist art.',
    thumbnail: 'https://picsum.photos/seed/vangogh/200/200'
  },
  {
    id: 'pop-art',
    name: 'Pop Pet Art',
    description: 'Bold, flat colors and halftone patterns inspired by Andy Warhol.',
    prompt: 'A vibrant Pop Art masterpiece in the style of Andy Warhol. Use bold, flat contrasting colors, thick black outlines, and subtle halftone dot patterns. The composition should be modern, iconic, and eye-catching.',
    thumbnail: 'https://picsum.photos/seed/popart/200/200'
  },
  {
    id: 'watercolor',
    name: 'Soft Watercolor',
    description: 'Dreamy washes of color with expressive splashes.',
    prompt: 'A delicate and expressive watercolor painting. Use soft, translucent washes of color, beautiful paint bleeds, and artistic splashes. Keep the background minimal to emphasize the textures of the paper and the fluidity of the paint.',
    thumbnail: 'https://picsum.photos/seed/water/200/200'
  },
  {
    id: 'cubist',
    name: 'Geometric Cubism',
    description: 'Abstract geometric shapes inspired by Pablo Picasso.',
    prompt: 'A Cubist interpretation of the pet, inspired by Pablo Picasso. Deconstruct the pet into geometric planes and fragmented perspectives. Use a rich, earthy color palette with sharp lines and abstract shapes while maintaining the pet\'s core identity.',
    thumbnail: 'https://picsum.photos/seed/cubist/200/200'
  },
  {
    id: 'classical',
    name: 'Renaissance Oil',
    description: 'Dramatic lighting and rich details of a classical oil painting.',
    prompt: 'A regal classical oil painting from the Renaissance era. Use dramatic chiaroscuro lighting, rich textures, and incredibly fine detail. Place the pet in a dignified, noble pose that feels like it belongs in an 18th-century gallery.',
    thumbnail: 'https://picsum.photos/seed/classical/200/200'
  }
];

export const PRODUCTS: ProductType[] = [
  {
    id: 'canvas',
    name: 'Gallery Canvas',
    description: 'Hand-stretched over a sustainable wooden frame.',
    basePrice: 49.99,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'metal',
    name: 'Modern Metal',
    description: 'Sleek Dibond aluminum with a high-gloss finish.',
    basePrice: 79.99,
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'poster',
    name: 'Fine Art Poster',
    description: 'Premium semi-gloss paper, perfect for framing.',
    basePrice: 24.99,
    image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&q=80&w=400'
  }
];

export const SIZES: ProductSize[] = [
  { label: '8" × 10"', multiplier: 1.0 },
  { label: '11" × 14"', multiplier: 1.25 },
  { label: '16" × 20"', multiplier: 1.6 },
  { label: '18" × 24"', multiplier: 2.0 },
  { label: '24" × 36"', multiplier: 3.0 }
];
