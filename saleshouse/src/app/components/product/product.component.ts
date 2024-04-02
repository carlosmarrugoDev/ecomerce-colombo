import { Component, Input } from "@angular/core";
import { Products } from "../../interfaces/Product.interface";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {
  @Input() product!: Products;
}