import { Component } from '@angular/core';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { HttpClient } from '@angular/common/http';

export interface ProductElement {
  // room number, occupancy status, cleaning status, maintenance status, fault description and request
  id: number;
  productName: string;
  numberOfItems: number;
  status: string;
}

const ELEMENT_DATA: ProductElement[] = [
  {
    id: 1,
    productName: "Bleach (Bottle)",
    numberOfItems: 157,
    status: "Sufficient",
  },
  {
    id: 2,
    productName: "Blanket",
    numberOfItems: 594,
    status: "Sufficient"
  },
  {
    id: 3,
    productName: "TV Unit",
    numberOfItems: 37,
    status: "Insufficient"
  },
];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  displayedColumns: string[] = [
    'id',
    'productName',
    'numberOfItems',
    'status'
  ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog:MatDialog, private http: HttpClient) {

  }

  public openDialog() {
    const dialogRef = this.dialog.open(AddProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openProductDialog(item:any) {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  downloadReport() {
    const fileUrl = './assets/inventory_excel.xlsx';
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((response) => {
      this.saveFile(response);
      console.log(fileUrl);
    });
  }

  private saveFile(blob: Blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'inventory_excel.xlsx';
    link.click();
    window.URL.revokeObjectURL(link.href);
    link.remove();
  }
}
