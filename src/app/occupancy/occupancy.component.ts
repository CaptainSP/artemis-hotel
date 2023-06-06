import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface RoomElement {
  building: string;
  position: number;
  floor: number;
  availability: boolean;
  occupiedBy?: Customer;
}

export interface Customer {
  name: string;
}

const ELEMENT_DATA: RoomElement[] = [
  { position: 1, building: 'A', floor: 1, availability: true },
  { position: 2, building: 'B', floor: 4, availability: true },
  {
    position: 3,
    building: 'C',
    floor: 6,
    availability: false,
    occupiedBy: { name: 'John Doe' },
  },
  { position: 4, building: 'A', floor: 9, availability: true },
  {
    position: 5,
    building: 'D',
    floor: 10,
    availability: false,
    occupiedBy: { name: 'John Doe' },
  },
  {
    position: 6,
    building: 'D',
    floor: 12,
    availability: false,
    occupiedBy: { name: 'John Doe' },
  },
  { position: 7, building: 'F', floor: 14, availability: true },
  { position: 8, building: 'B', floor: 15, availability: true },
  {
    position: 9,
    building: 'C',
    floor: 18,
    availability: false,
    occupiedBy: { name: 'John Doe' },
  },
  { position: 10, building: 'A', floor: 20, availability: true },
];

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.scss'],
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
export class OccupancyComponent {
  constructor(private http: HttpClient) {}

  displayedColumns: string[] = [
    'position',
    'building',
    'floor',
    'availability',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  dataSource = ELEMENT_DATA;
  expandedElement: RoomElement | null = null;

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
        item.building.toLowerCase().includes(this.filter) ||
        item.floor.toString().includes(this.filter) ||
        item.availability.toString().includes(this.filter)
      );
    });
  }

  public getAvaibleRooms(): number {
    return this.dataSource.filter((item) => item.availability).length;
  }

  public getOccupiedRooms(): number {
    return this.dataSource.filter((item) => !item.availability).length;
  }

  public getAvaibleText(): string {
    return (
      this.getAvaibleRooms() + '/' + ELEMENT_DATA.length + ' rooms available'
    );
  }

  avaibility = false;
  public filterByAvaibility() {
    this.avaibility = !this.avaibility;
    this.dataSource = ELEMENT_DATA.filter((item) =>
      this.avaibility == true ? item.availability : true
    );
  }

  downloadReport() {
    const fileUrl = './assets/occupancy_excel.xlsx';
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((response) => {
      this.saveFile(response);
      console.log(fileUrl);
    });
  }

  private saveFile(blob: Blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'occupancy_excel.xlsx';
    link.click();
    window.URL.revokeObjectURL(link.href);
    link.remove();
  }
}
