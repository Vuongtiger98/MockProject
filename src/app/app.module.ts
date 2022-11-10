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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MyFilterPipe } from './my-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    HeaderComponent,
    LoginComponent,
    ProductDetailComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
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
          path: "products/:id",
          component: ProductDetailComponent,
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
