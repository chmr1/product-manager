import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './list';
import { ProductCreateComponent } from './create';
import { ProductDetailComponent, ProductDetailGuard } from './detail';
import { SharedModule } from './../shared';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'products/list',
        component: ProductListComponent
      },
      {
        path: 'product/detail/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
