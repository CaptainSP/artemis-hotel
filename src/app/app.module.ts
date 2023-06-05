import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OccupancyComponent } from './occupancy/occupancy.component';
import { MatTableModule } from '@angular/material/table';
import { FinanceComponent } from './finance/finance.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BillingComponent } from './finance/billing/billing.component';
import { FinanceTabComponent } from './finance/finance-tab/finance-tab.component';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './table/table.component';
import { TasksComponent } from './tasks/tasks.component';
import { MatMenuModule } from '@angular/material/menu';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    LoginComponent,
    OccupancyComponent,
    FinanceComponent,
    BillingComponent,
    FinanceTabComponent,
    TableComponent,
    TasksComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
