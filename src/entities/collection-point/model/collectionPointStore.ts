import { create } from 'zustand';
import { httpClient } from '../../../shared/api/http-client';

export interface CollectionPoint {
  id: string;
  name: string;
  address: string;
  city: string;
  schedule?: string;
  types?: string[];
}

interface CollectionPointStore {
  points: CollectionPoint[];
  isLoading: boolean;
  error: string | null;
  fetchPoints: () => Promise<void>;
}

export const useCollectionPointStore = create<CollectionPointStore>((set) => ({
  points: [],
  isLoading: false,
  error: null,
  fetchPoints: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await httpClient.get('/collection-points');
      set({ points: res.data, isLoading: false });
    } catch (e: any) {
      set({ error: e?.response?.data?.message || 'Ошибка загрузки пунктов', isLoading: false });
    }
  },
})); 