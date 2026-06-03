import { NavigationMenu } from 'navigation-menu';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'settings',
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    loadChildren: () => import('settings/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'dashboard',
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    loadChildren: () => import('dashboard/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NavigationMenu,
  },
];
