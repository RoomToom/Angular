import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';
import { CartService } from '../cart.service';  // Імпортуємо CartService

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService  // Введення CartService
  ) {}

  ngOnInit() {
    // Отримуємо productId із параметрів маршруту
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    
    // Знаходимо продукт за productId
    this.product = products.find(product => product.id === Number(productIdFromRoute));
  }

  // Додаємо метод addToCart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Ваш товар додано до кошика!');
  }
}
