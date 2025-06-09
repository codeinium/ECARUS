import { create } from 'zustand';
import { httpClient } from '../../../shared/api/http-client';
import { API_ENDPOINTS } from '../../../shared/config/api';

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  avatarUrl?: string;
}

interface UserStore {
  profile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  clear: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  profile: null,
  isLoading: false,
  error: null,
  fetchProfile: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await httpClient.get(API_ENDPOINTS.user.profile);
      set({ profile: res.data.data, isLoading: false });
    } catch (e: any) {
      set({ error: e?.response?.data?.message || 'Ошибка загрузки профиля', isLoading: false });
    }
  },
  updateProfile: async () => {
    set({ error: 'Обновление профиля не поддерживается в текущем API' });
  },
  clear: () => set({ profile: null, error: null }),
})); 