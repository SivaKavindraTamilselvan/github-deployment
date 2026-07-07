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
    this.loadWeather();
  }

  loadWeather() {
    this.loading.set(true);
    this.error.set('');

    this.weatherService.getWeather().subscribe({
      next: (res) => {
        this.weather.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Failed to load weather forecast. Please try again.');
      }
    });
  }
}
