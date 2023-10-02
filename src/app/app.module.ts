import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SemesterSelectComponent } from './pages/semester-select/semester-select.component';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {MatTableModule} from '@angular/material/table';
import { AddOccupantPopupComponent } from './components/add-occupant-popup/add-occupant-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import { RemoveOccupantPopupComponent } from './components/remove-occupant-popup/remove-occupant-popup.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddListPopupComponent } from './components/add-list-popup/add-list-popup.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { DeleteListPopupComponent } from './components/delete-list-popup/delete-list-popup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SemesterSelectComponent,
    DashboardPageComponent,
    AddOccupantPopupComponent,
    RemoveOccupantPopupComponent,
    AddListPopupComponent,
    DeleteListPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
