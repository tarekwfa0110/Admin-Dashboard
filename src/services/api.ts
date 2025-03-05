import axios from 'axios';

const baseURL = process.env.VITE_API_URL || 'http://localhost:5173/api';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await api.post('/auth/refresh', { refreshToken });
        const { token } = response.data;
        localStorage.setItem('auth_token', token);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (err) {
        // Handle refresh token error (e.g., redirect to login)
        localStorage.removeItem('auth_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const endpoints = {
  auth: {
    login: (data: { email: string; password: string }) => 
      api.post('/auth/login', data),
    register: (data: { email: string; password: string; name: string }) => 
      api.post('/auth/register', data),
    logout: () => api.post('/auth/logout'),
  },
  users: {
    getAll: () => api.get('/users'),
    getById: (id: string) => api.get(`/users/${id}`),
    update: (id: string, data: Partial<User>) => api.put(`/users/${id}`, data),
    delete: (id: string) => api.delete(`/users/${id}`),
  },
  teams: {
    getAll: () => api.get('/teams'),
    getById: (id: string) => api.get(`/teams/${id}`),
    create: (data: CreateTeamDto) => api.post('/teams', data),
    update: (id: string, data: Partial<Team>) => api.put(`/teams/${id}`, data),
    delete: (id: string) => api.delete(`/teams/${id}`),
  },
  contacts: {
    getAll: () => api.get('/contacts'),
    getById: (id: string) => api.get(`/contacts/${id}`),
    create: (data: CreateContactDto) => api.post('/contacts', data),
    update: (id: string, data: Partial<Contact>) => api.put(`/contacts/${id}`, data),
    delete: (id: string) => api.delete(`/contacts/${id}`),
  },
  invoices: {
    getAll: () => api.get('/invoices'),
    getById: (id: string) => api.get(`/invoices/${id}`),
    create: (data: CreateInvoiceDto) => api.post('/invoices', data),
    update: (id: string, data: Partial<Invoice>) => api.put(`/invoices/${id}`, data),
    delete: (id: string) => api.delete(`/invoices/${id}`),
  },
};

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  id: string;
  name: string;
  members: User[];
  createdAt: string;
  updatedAt: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: string;
  number: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  customer: Contact;
  createdAt: string;
  updatedAt: string;
}

export type CreateTeamDto = Omit<Team, 'id' | 'createdAt' | 'updatedAt'>;
export type CreateContactDto = Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>;
export type CreateInvoiceDto = Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>; 