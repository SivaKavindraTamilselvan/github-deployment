import { Component, computed, inject, signal } from '@angular/core';
import { WeatherService } from './service';
import { Weather } from './model';

@Component({
  selector: 'app-weather-app',
  imports: [],
  templateUrl: './weather-app.html',
  styleUrl: './weather-app.css',
})
export class WeatherApp {
  loading = signal(false);
  weather = signal<Weather[]>([]);
  error = signal('');
  totalRecords = computed(() => this.weather()?.length ?? 0);

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.loading.set(true);
    this.error.set('');

    this.weatherService.getWeather().subscribe({
      next: (response) => {
        this.weather.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Unable to load weather data. Please try again later.');
        this.loading.set(false);
      }
    });
  }
}
