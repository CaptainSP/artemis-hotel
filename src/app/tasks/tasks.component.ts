import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';

export interface TaskElement {
  // room number, occupancy status, cleaning status, maintenance status, fault description and request
  position: number;
  roomNumber: number;
  occupancyStatus: string;
  cleaningStatus: string;
  maintenanceStatus: string;
  faultDescription: string;
  request: string;
}

const ELEMENT_DATA: TaskElement[] = [
  {
    position: 1,
    roomNumber: 1,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },
  {
    position: 2,
    roomNumber: 2,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },
  {
    position: 3,
    roomNumber: 3,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },
  {
    position: 4,
    roomNumber: 4,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },
  {
    position: 5,
    roomNumber: 5,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },
  {
    position: 6,
    roomNumber: 6,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },
  {
    position: 7,
    roomNumber: 7,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },
  {
    position: 8,
    roomNumber: 8,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },
  {
    position: 9,
    roomNumber: 9,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },

  {
    position: 10,
    roomNumber: 10,
    occupancyStatus: 'Occupied',
    cleaningStatus: 'Cleaned',
    maintenanceStatus: 'Maintained',
    faultDescription: 'Broken',
    request: 'Request',
  },
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  displayedColumns: string[] = [
    'position',
    'roomNumber',
    'occupancyStatus',
    'cleaningStatus',
    'maintenanceStatus',
    'faultDescription',
    'request',
  ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog:MatDialog) {

  }

  public openDialog() {
    const dialogRef = this.dialog.open(CreateTaskComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
