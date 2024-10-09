import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';  // Імпортуємо інтерфейс Product

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];  // Вказуємо, що items - це масив продуктів

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Отримуємо товари з кошика під час ініціалізації компонента
    this.items = this.cartService.getItems();
  }

  // Метод для очищення кошика
  clearCart() {
    this.items = this.cartService.clearCart();
    window.alert('Кошик очищено!');
  }
}
