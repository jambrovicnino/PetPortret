
export type AppStep = 'upload' | 'style' | 'options' | 'preview' | 'checkout';

export type FrameType = 'classic' | 'modern' | 'gold' | 'rustic';

export interface ArtStyle {
  id: string;
  name: string;
  description: string;
  prompt: string;
  thumbnail: string;
}

export interface ProductType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
}

export interface ProductSize {
  label: string;
  multiplier: number;
}

export interface PetPortraitConfig {
  petName: string;
  style: ArtStyle | null;
  product: ProductType | null;
  size: ProductSize | null;
  originalImage: string | null;
  generatedImages: string[];
  selectedVariationIndex: number;
  frameType?: FrameType;
}
