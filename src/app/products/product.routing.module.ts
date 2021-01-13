import { Routes } from "@angular/router";

import { ProductListComponent } from "./list";
import { ProductDetailComponent } from "./detail";
import { ProductCreateComponent } from "./create";

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
    component: ProductDetailComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  }
];
