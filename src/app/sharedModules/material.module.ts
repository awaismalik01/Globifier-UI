import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, MatInputModule],
  exports: [MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
