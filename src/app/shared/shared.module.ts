import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StarComponent } from './components';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
