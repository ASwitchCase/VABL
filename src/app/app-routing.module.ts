import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SemesterSelectComponent } from './pages/semester-select/semester-select.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {path: 'login', component:LoginPageComponent},
  {path: 'semester-select', component:SemesterSelectComponent},
  {path: 'dashboard', component:DashboardPageComponent},
  {path: '', component:SemesterSelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
