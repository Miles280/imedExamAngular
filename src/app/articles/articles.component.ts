import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  private productService = inject(ProductService);
  private fb = inject(FormBuilder)

  products: Product[] = [];
  filteredProducts: Product[] = [];
  
  filterForm = this.fb.group({
    search: [''],
    maxPrice: [null , Validators.min(50)],
    promoOnly: [false],
  })

  
  getDiscountedPrice(price: number, discount: number): number {
    return Math.round(price * (1 - discount) * 100) / 100;
  }

  applyFilters(): void {
    const { search, maxPrice, promoOnly } = this.filterForm.value;

    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch = search
        ? product.title.toLowerCase().includes(search.toLowerCase())
        : true;

      const matchesPrice = maxPrice ? product.fullPrice <= maxPrice : true;

      const matchesPromo = promoOnly ? product.discountPercent > 0 : true;

      return matchesSearch && matchesPrice && matchesPromo;
    });
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.applyFilters();
        console.log(this.products);

        this.filterForm.valueChanges.subscribe(() => {
        this.applyFilters();
        });
      }
    }); 
  }

  onSubmit(): void {
    this.applyFilters();
  }
}
