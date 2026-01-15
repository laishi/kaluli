
import React from 'react';
import { RecognitionHistory } from './types';

export const COLORS = {
  PRIMARY: '#DC2626',
  NEON_RED: '#FF0000',
  CRIMSON: '#DC143C',
};

export const MOCK_HISTORY: RecognitionHistory[] = [
  {
    id: '1',
    foodName: '三文鱼牛油果沙拉',
    calories: 420,
    timestamp: '2小时前',
    mealType: '午餐',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5581LACwdmvJbjak6IFdunNNR7MtoJvQ544u2pCNW3fNat7How4u1CzauDoNID26uz4TILWyy_9hHv0TLLXoOS4D44E5ZWO8FrRc32ZNBhT4Z7aYElBPR1pGOz29vYNVzsE_dIkvEb062ga2Q30yMMCh3vd26o8nSIFj08M_L04sKAjDNqfYqndOs9DuZcvK600FA3MrK-Fjmfz3GjrE11akAqZM_zoGUCHKxB6q-bzUvj-HpMSOn3_KRUKomPW4DZcX9gBvpuDzc'
  },
  {
    id: '2',
    foodName: '牛油果吐司',
    calories: 340,
    timestamp: '08:30',
    mealType: '早餐',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8L2OytW7yPKVWmsMffk4EXu11AhCeM07hKLNTbsiQP6ukcyJIFTcer46QsRCXmHQ6qk7ykf3xBLzf1xyjnp7RX-4Xa8Z_bGWhOCy_H0J4g4remYI9Ji1Tuur80aQSB4DcrL4Ekho8fHy1YyXP-FaPxhYvcIrjYceBppoMV3173SqY5HCGM-pARuV2Nql2dRiQTLZhTuWMeaLzbuHUilDtawK-6u94b_QYhnAzA8DOUpthS9ken5mx5z3ST6GIJy6qowPhlRQHgO2X'
  }
];
