import { useUserStore } from '../../entities/user';

export async function logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  useUserStore.getState().clear();
  window.location.href = '/login';
} 