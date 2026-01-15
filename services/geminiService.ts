
import { GoogleGenAI, Type } from "@google/genai";
import { NutritionData } from "../types";

export const recognizeFood = async (base64Image: string): Promise<NutritionData> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: base64Image,
          },
        },
        {
          text: "Analyze the food in this image and provide nutritional information in JSON format. Return the food name, estimated total calories, grams of protein, grams of carbohydrates, and grams of fat. Also provide a brief health suggestion based on the meal composition. Use Chinese for text values."
        }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          foodName: { type: Type.STRING },
          calories: { type: Type.NUMBER },
          protein: { type: Type.NUMBER },
          carbs: { type: Type.NUMBER },
          fat: { type: Type.NUMBER },
          suggestions: { type: Type.STRING },
        },
        required: ["foodName", "calories", "protein", "carbs", "fat", "suggestions"],
      },
    },
  });

  const text = response.text || "";
  try {
    return JSON.parse(text) as NutritionData;
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    throw new Error("识别失败，请重试");
  }
};
