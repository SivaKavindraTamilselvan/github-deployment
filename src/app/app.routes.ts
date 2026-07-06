import { Routes } from '@angular/router';
import { WeatherApp } from './weather-app/weather-app';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherApp
  },
  {
    path: '**',
    redirectTo: 'weather'
  }
];