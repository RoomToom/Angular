import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';  // Імпортуємо CartService

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder  // Ініціалізуємо FormBuilder через конструктор
  ) {
    // Створюємо форму під час ініціалізації конструктора
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Очищаємо кошик після оформлення замовлення
    this.cartService.clearCart();
    console.warn('Ваше замовлення оформлено', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
