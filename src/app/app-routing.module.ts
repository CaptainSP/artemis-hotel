import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OccupancyComponent } from './occupancy/occupancy.component';
import { FinanceComponent } from './finance/finance.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home', description: 'General analytics and overview' },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'occupancy',
    component: OccupancyComponent,
    data: {
      title: 'Occupancy Management',
      description: 'Manage occupancy of the hotel',
    },
  },
  {
    path: 'finance',
    component: FinanceComponent,
    data: {
      title: 'Finance and Billing',
      description: 'See the financial status of the hotel',
    },
  },
  {
    path: 'tasks',
    component: TasksComponent,
    data: {
      title: 'Tasks and Maintenance',
      description: 'Manage tasks and maintenance of the hotel',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
