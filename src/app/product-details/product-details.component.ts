import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  constructor(
    public fb: FormBuilder,
    public ref:DialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {
    console.log(data)
  }

  public productForm = this.fb.group({
    title: [''],
    description: [''],
  });
}
