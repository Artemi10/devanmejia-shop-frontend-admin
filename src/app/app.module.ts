import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { HeaderComponent } from './components/admin/header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LogInComponent } from './components/admin/log-in/log-in.component';
import {AuthHeaderInterceptor} from './services/authentication/auth-header.interceptor';
import {AuthErrorHandler} from './services/authentication/auth-error.handler';
import {AuthenticationGuard} from './guards/authentication/authentication.guard';
import { StockProductPanelComponent } from './components/admin/stock/stock-product-panel/stock-product-panel.component';
import { StockProductComponent } from './components/admin/stock/stock-product-panel/stock-product/stock-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { OrderListComponent } from './components/admin/orders/order-list/order-list.component';
import { OrderProductsComponent } from './components/admin/orders/order-products/order-products.component';
import { OrderComponent } from './components/admin/orders/order-list/order/order.component';
import { OrderProductComponent } from './components/admin/orders/order-products/order-product/order-product.component';
import { OrderListFilterComponent } from './components/admin/orders/order-list/order-list-filter/order-list-filter.component';
import { FilterTypeComponent } from './components/admin/orders/order-list/order-list-filter/filter-type/filter-type.component';
import { StockComponent } from './components/admin/stock/stock.component';
import { NewProductPanelComponent } from './components/admin/stock/new-product-panel/new-product-panel.component';
import { CropperComponent } from './components/admin/stock/new-product-panel/cropper/cropper.component';

const appRoutes: Routes = [
  {path:'orders', component:OrdersComponent, canActivate:[AuthenticationGuard]},
  {path:'logIn', component:LogInComponent},
  {path:'', component: StockComponent, canActivate:[AuthenticationGuard]}

];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    LogInComponent,
    StockProductPanelComponent,
    StockProductComponent,
    OrdersComponent,
    OrderListComponent,
    OrderProductsComponent,
    OrderComponent,
    OrderProductComponent,
    OrderListFilterComponent,
    FilterTypeComponent,
    StockComponent,
    NewProductPanelComponent,
    CropperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptor,
    multi: true},
    {provide:ErrorHandler, useClass:AuthErrorHandler},
    {provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
