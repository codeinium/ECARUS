export const API_CONFIG = {
  baseURL: 'http://ecoapp-itis.ru',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
} as const;

export const API_ENDPOINTS = {
  auth: {
    login: '/oauth/token',
    refresh: '/oauth/token',
  },
  register: '/api/register',
  forgot: '/api/forgot',
  user: {
    profile: '/api/user',
    addresses: '/api/user/addreses',
    update: '/api/user/update',
  },
  basket: {
    get: '/api/basket',
    add: '/api/basket/add',
    delete: (id: number|string) => `/api/basket/delete/${id}`,
  },
  orders: {
    list: '/api/orders',
    create: '/api/orders/new',
    duplicate: (orderId: number|string) => `/api/orders/${orderId}/duplicate`,
  },
  categories: {
    list: '/api/categories',
    byId: (id: number|string) => `/api/categories/${id}`,
    filter: (id: number|string) => `/api/categories/${id}/filter`,
    search: (id: number|string, query: string) => `/api/categories/${id}/search?query=${encodeURIComponent(query)}`,
  },
  drinks: {
    byId: (id: number|string) => `/api/drinks/${id}`,
    search: (query: string) => `/api/drinks/search?query=${encodeURIComponent(query)}`,
    setTop: '/api/drinks/set-top',
    setImage: '/api/drinks/set_image',
    properties: (id?: number|string) => id ? `/api/drinks/properties/${id}` : '/api/drinks/properties',
    type: (ext_id: string) => `/api/drinks/type?ext_id=${ext_id}`,
    hiddenAll: '/api/drinks/hidden_all',
  },
  banners: {
    list: '/api/banners',
    byId: (id: number|string) => `/api/banners/${id}`,
    create: '/api/banners',
    update: (id: number|string) => `/api/banners/${id}`,
    delete: (id: number|string) => `/api/banners/${id}`,
  },
  news: {
    list: '/api/news',
    byId: (id: number|string) => `/api/news/${id}`,
    create: '/api/news',
    update: (id: number|string) => `/api/news/${id}`,
    delete: (id: number|string) => `/api/news/${id}`,
  },
  top10: '/api/top10',
  phyzic: {
    order: '/api/phyzic/order',
    addresses: '/api/phyzic/addresses',
  },
  credits: '/api/credits',
  dogovors: '/api/dogovors',
  push: '/api/users/push',
} as const; 