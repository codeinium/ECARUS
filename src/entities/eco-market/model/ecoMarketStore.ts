import { create } from 'zustand';
import { httpClient } from '../../../shared/api/http-client';

export interface EcoMarketProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
}

interface EcoMarketStore {
  products: EcoMarketProduct[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useEcoMarketStore = create<EcoMarketStore>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await httpClient.get('/eco-market');
      set({ products: res.data, isLoading: false });
    } catch (e: any) {
      set({ error: e?.response?.data?.message || 'Ошибка загрузки товаров', isLoading: false });
    }
  },
})); 