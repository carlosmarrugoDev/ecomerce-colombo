import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpRequest } from '../../interfaces/Http.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient :  HttpClient 
  ) { }

  get<T>(options: IHttpRequest): Promise<T> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<T>(options.url).subscribe({
        next(value) {
          resolve(value);
        },
        error(err) {
          reject(err);
        },
      })
    })
  }
}
