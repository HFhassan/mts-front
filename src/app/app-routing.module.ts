import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { report } from 'process';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ReportComponent } from './report/report.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'employee', component: EmployeeDataComponent },
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainMenuComponent},
  {path: 'report',component:ReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
