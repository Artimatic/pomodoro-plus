import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'settings',
    loadChildren: () => import('settings/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
