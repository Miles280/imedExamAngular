import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiUrl = 'http://localhost:8000/ventilo';

  constructor(private http: HttpClient) {} 

  getAll(): Observable< Product[] > {
    return this.http.get< Product[] >(this.apiUrl);
  }
}
