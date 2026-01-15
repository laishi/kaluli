
export interface NutritionData {
  foodName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  suggestions: string;
}

export interface RecognitionHistory {
  id: string;
  foodName: string;
  calories: number;
  timestamp: string;
  mealType: string;
  imageUrl: string;
}

export enum AppTab {
  HOME = 'HOME',
  TRENDS = 'TRENDS',
  CAMERA = 'CAMERA',
  RECORDS = 'RECORDS',
  PROFILE = 'PROFILE'
}
