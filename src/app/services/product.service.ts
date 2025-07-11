import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiUrl = 'http://34.76.154.203/api/ventilo.php';

  constructor(private http: HttpClient) {} 

  getAll(): Observable< Product[] > {
    return this.http.get< Product[] >(this.apiUrl);
  }
}
