import { Component } from '@angular/core';
import { products, Product } from '../products';  // Імпортуємо інтерфейс і масив продуктів

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = products;  // Прив'язуємо масив продуктів із типом Product

  share() {
    window.alert('Продукт поділено!');
  }

  onNotify() {
    window.alert('Вас повідомлять, коли товар знизиться в ціні');
  }
}
