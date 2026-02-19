
import { GoogleGenAI } from "@google/genai";
import { ArtStyle } from "../types";

export const generatePortrait = async (
  base64Image: string,
  style: ArtStyle,
  petName?: string
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const textPart = {
    text: `${style.prompt} ${petName ? `The pet's name is "${petName}", but do not necessarily include the text in the image unless it enhances the composition.` : ""} Preserve the unique features, pose, and coloring of the pet in the original photo.`
  };

  const imagePart = {
    inlineData: {
      mimeType: 'image/png',
      data: base64Image.split(',')[1] || base64Image,
    },
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [imagePart, textPart] },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    const candidate = response.candidates?.[0];
    if (!candidate) throw new Error("No response from AI model");

    for (const part of candidate.content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    throw new Error("No image data found in AI response");
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};
