import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

export interface FinanceElement {
  amount: number;
  position: number;
  type: string;
  content: string;
  date?: string;
}

const ELEMENT_DATA: FinanceElement[] = [
  {
    position: 1,
    type: 'Expense',
    content: 'Billing',
    amount: 12,
    date: '2022-05-10',
  },
  {
    position: 2,
    type: 'Income',
    content: 'Tourism',
    amount: 34,
    date: '2022-05-10',
  },
  {
    position: 3,
    type: 'Income',
    content: 'Salaries',
    amount: 12,
    date: '2022-05-10', 
  },
  {
    position: 4,
    type: 'Expense',
    content: 'Operating',
    amount: 14,
    date: '2022-05-10',
  },
  {
    position: 5,
    type: 'Income',
    content: 'Accommodation',
    amount: 12,
    date: '2022-05-10',
  },
  {
    position: 6,
    type: 'Expense',
    content: 'Staff Salaries',
    amount: 54,
    date: '2022-05-10',
  },
  {
    position: 7,
    type: 'Income',
    content: 'Accommodation',
    amount: 32,
    date: '2022-05-10',
  },
  {
    position: 8,
    type: 'Income',
    content: 'Meeting and Organization',
    amount: 45,
    date: '2022-05-10',
  },
  {
    position: 9,
    type: 'Expense',
    content: 'Food',
    amount: 12,
    date: '2022-05-10',
  },
  {
    position: 10,
    type: 'Income',
    content: 'Meeting and Organization',
    amount: 76,
    date: '2022-05-10',
  },
];

@Component({
  selector: 'app-finance-tab',
  templateUrl: './finance-tab.component.html',
  styleUrls: ['./finance-tab.component.scss'],
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
export class FinanceTabComponent implements OnInit {
  public chart: any;
  public chart2: any;
  public chart3: any;
  public chart4: any;

  public ctx1: any;
  public ctx2: any;
  public ctx3: any;
  public ctx4: any;

  @ViewChild('canvas1') canvasRef1?: ElementRef;
  @ViewChild('canvas2') canvasRef2?: ElementRef;
  @ViewChild('canvas3') canvasRef3?: ElementRef;
  @ViewChild('canvas4') canvasRef4?: ElementRef;

  displayedColumns: string[] = [
    'position',
    'type',
    'content',
    'date',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  dataSource = ELEMENT_DATA;
  expandedElement: FinanceElement | null = null;

  filter: string = '';

  applyFilter($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.filter = filterValue.trim().toLowerCase();
    if (this.filter == '') {
      this.dataSource = ELEMENT_DATA;
      return;
    }
    this.dataSource = ELEMENT_DATA.filter((item) => {
      return (
        item.type.toLowerCase().includes(this.filter) ||
        item.content.toLowerCase().includes(this.filter) ||
        item.amount.toString().includes(this.filter) ||
        item.date?.toLowerCase().includes(this.filter)
      );
    }
    );
  }

  createChart() {
    this.ctx1 = this.canvasRef1?.nativeElement.getContext('2d');
    this.ctx2 = this.canvasRef2?.nativeElement.getContext('2d');
    this.ctx3 = this.canvasRef3?.nativeElement.getContext('2d');
    this.ctx4 = this.canvasRef4?.nativeElement.getContext('2d');

    /* 'Billing',
          'Staff Salaries',
          'Food',
          'Marketing and Advertising',
          'Operating',
          'Facility',
          'Other', */

    this.chart = new Chart(this.ctx2, {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis

        // accommodation income, meeting and organization incomes, tourism incomes and other incomes
        labels: [
          'Accommodation',
          'Meeting and Organization',
          'Tourism',
          'Other', // ...
        ],
        datasets: [
          {
            label: 'Incomes',
            data: ['467', '576', '572', '79'],
            backgroundColor: ['#47A992', '#F79327', '#B799FF', '#CBB279'],
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });

    var delayed = true;
    this.chart = new Chart(this.ctx1, {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Incomes',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: '#47A992',
          },
          {
            label: 'Expenses',
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: '#F79327',
          },
        ],
      },
    });

    this.chart3 = new Chart(this.ctx3, {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis

        // accommodation income, meeting and organization incomes, tourism incomes and other incomes
        labels: [
          'Billing',
          'Staff Salaries',
          'Food',
          'Marketing and Advertising',
          'Operating',
          'Facility',
          'Other',
        ],
        datasets: [
          {
            label: 'Expenses',
            data: ['467', '576', '572', '79', '92', '574', '573'],
            backgroundColor: ['#47A992', '#F79327', '#B799FF', '#CBB279'],
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart();
    }, 1000);
  }
}
