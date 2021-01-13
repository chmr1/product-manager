import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './list';
import { ProductCreateComponent } from './create';
import { ProductDetailComponent } from './detail';
import { StarComponent } from './../shared';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductModule { }
