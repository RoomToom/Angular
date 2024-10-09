import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Імпорт для загальних пайпів
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';  // Імпортуємо CartComponent
import { ShippingComponent } from './shipping/shipping.component';  // Імпортуємо ShippingComponent

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,  // Додаємо CommonModule для підтримки пайпів, таких як currency
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },  // Новий маршрут для кошика
      { path: 'shipping', component: ShippingComponent }  // Новий маршрут для оформлення замовлення
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertsComponent,
    CartComponent,
    ShippingComponent  // Додаємо ShippingComponent у declarations
  ],
  providers: [CartService],  // Додаємо CartService до providers
  bootstrap: [AppComponent]
})
export class AppModule { }
