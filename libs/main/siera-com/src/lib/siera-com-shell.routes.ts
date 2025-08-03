import { Route } from '@angular/router';

export const sieraComShellRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'who-we-are',
    loadComponent: () =>
      import('./pages/who-we-are/who-we-are.component').then(
        (c) => c.WhoWeAreComponent
      ),
  },
  {
    path: 'what-we-do',
    loadComponent: () =>
      import('./pages/what-we-do/what-we-do.component').then(
        (c) => c.WhatWeDoComponent
      ),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./pages/news/news.component').then((c) => c.NewsComponent),
  },
  {
    path: 'all-websites',
    loadComponent: () =>
      import('./pages/all-websites/all-websites.component').then(
        (c) => c.AllWebsitesComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
