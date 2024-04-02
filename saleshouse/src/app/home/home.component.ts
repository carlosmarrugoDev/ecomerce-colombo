import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/Product.interface';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/apiService/api.service';
import { IHttpRequest } from '../interfaces/Http.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  public products: Products[] = [];

  async ngOnInit(): Promise<void> {
    const page = 0;
    const perPage = 5;
    const request: IHttpRequest = {
      url: `http://localhost:3000/clothes?page=${page}&perPage=${perPage}`,
      method: "GET"
    }
    this.products = await this.apiService.get(request);
    console.log(this.products);
  }

}

