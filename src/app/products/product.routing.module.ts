import { Routes } from "@angular/router";

import { ProductListComponent } from "./list";

export const ProductRoutes: Routes = [
  {
    path: 'list',
    redirectTo: 'products/list'
  },
  {
    path: 'products/list',
    component: ProductListComponent
  }
]