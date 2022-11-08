import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    HeaderComponent,
    LoginComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full',
        },
        {
          path: 'home',
          component: MainComponent,
        },
        {
          path: 'shop',
          component: ShopComponent,
        },
        {
          path: 'login',
          component: LoginComponent,
        }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
