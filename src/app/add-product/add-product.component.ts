import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor(
    public fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  public productForm = this.fb.group({
    title: [''],
    description: [''],
  });

  public submit() {
        this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Product has been added successfully!', 'Close', {
      duration: 5000,
    });
  }
}
