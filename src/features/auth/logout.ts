import { httpClient } from '../../shared/api/http-client';
import { API_ENDPOINTS } from '../../shared/config/api';
import { useUserStore } from '../../entities/user';

export async function logout() {
  try {
    await httpClient.post(API_ENDPOINTS.auth.logout);
  } catch {}
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  useUserStore.getState().clear();
  window.location.href = '/login';
} 