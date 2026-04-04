import { InjectionToken } from '@angular/core';

export interface ApiConfig {
  apiUrl: string;
  production: boolean;
  timeout?: number;
  retries?: number;
}

export const API_CONFIG_TOKEN = new InjectionToken<ApiConfig>('API_CONFIG_TOKEN');

export const defaultApiConfig: ApiConfig = {
  apiUrl: 'http://localhost:3000',
  production: false,
  timeout: 30000,
  retries: 3,
};
