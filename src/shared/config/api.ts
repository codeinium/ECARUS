export const API_CONFIG = {
  baseURL: 'https://mcp.ecarus.ru/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
} as const;

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
  },
  user: {
    profile: '/user/profile',
    update: '/user/update',
  },
  // Add other endpoints as needed
} as const; 