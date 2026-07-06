import { Component, inject, signal } from '@angular/core';
import { WeatherService } from './service';
import { Weather } from './model';

@Component({
  selector: 'app-weather-app',
  imports: [],
  templateUrl: './weather-app.html',
  styleUrl: './weather-app.css',
})
export class WeatherApp {
  private weatherService = inject(WeatherService);

  weather = signal<Weather[]>([]);

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather.set(data);
    });
  }
}
