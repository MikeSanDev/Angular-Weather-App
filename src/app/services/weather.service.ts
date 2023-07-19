import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    this.http.get(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderName)
    })
  }
}