import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

export interface BillingElement {
  content: string;
  position: number;
  amount: number;
  active: boolean;
  occupiedBy?: Customer;
}

export interface Customer {
  name: string;
}

const customers: Customer[] = [
  { name: 'John Doe' },
  { name: 'Jane Doe' },
  { name: 'John Smith' },
  { name: 'Jane Smith' },
  { name: 'John Doe' },
  { name: 'Jane Doe' },
  { name: 'John Smith' },
  { name: 'Jane Smith' },
  { name: 'John Doe' },
  { name: 'Jane Doe' },
  
]; 

const ELEMENT_DATA: BillingElement[] = [
  { position: 1, content: 'Food', amount: 1, active: true , occupiedBy : customers[0]},
  { position: 2, content: 'Room (2x)', amount: 4, active: true, occupiedBy: customers[1] },
  {
    position: 3,
    content: 'Room (1x)',
    amount: 6,
    active: false,
    occupiedBy: customers[2],
  },
  { position: 4, content: 'Marketing', amount: 9, active: true, occupiedBy: customers[3] },
  { position: 5, content: 'Food', amount: 10, active: false , occupiedBy: customers[4]},
  { position: 6, content: 'Marketing', amount: 12, active: false, occupiedBy: customers[5] },
  { position: 7, content: 'Room (3x)', amount: 14, active: true, occupiedBy: customers[6] },
  { position: 8, content: 'Food', amount: 15, active: true, occupiedBy: customers[7] },
  { position: 9, content: 'Marketing', amount: 18, active: false, occupiedBy: customers[8] },
  { position: 10, content: 'Food', amount: 20, active: true, occupiedBy: customers[9] },
];

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class BillingComponent {
  displayedColumns: string[] = [
    'position',
    'content',
    'amount',
    'active',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  dataSource = ELEMENT_DATA;
  expandedElement: BillingElement | null = null;

  filter: string = '';

  applyFilter($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.filter = filterValue.trim().toLowerCase();
    if (this.filter == '') {
      this.dataSource = ELEMENT_DATA;
      return;
    }
    this.dataSource = this.dataSource.filter((item) => {
      return (
        item.content.toLowerCase().includes(this.filter) ||
        item.amount.toString().includes(this.filter) ||
        item.active.toString().includes(this.filter)
      );
    });
  }

  public getAvaibleRooms(): number {
    return this.dataSource.filter((item) => item.active).length;
  }

  public getOccupiedRooms(): number {
    return this.dataSource.filter((item) => !item.active).length;
  }

  public getAvaibleText(): string {
    return (
      this.getAvaibleRooms() + '/' + ELEMENT_DATA.length + ' rooms available'
    );
  }
}
