import { ProductDetailGuard } from './detail/product-detail.guard';
import { Routes } from "@angular/router";

import { ProductListComponent } from "./list";
import { ProductDetailComponent } from "./detail";

export const ProductsRoutes: Routes = [
  {
    path: 'products',
    redirectTo: 'products/list'
  },
  {
    path: 'products/list',
    component: ProductListComponent
  },
  {
    path: 'product/detail/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }
];
