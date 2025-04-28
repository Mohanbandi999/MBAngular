import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { authGuard } from './auth.guard';
import { restrictGuard } from './restrict.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'},  
    {path: 'login', component: LoginComponent, pathMatch: 'full'},   
    {path: 'main/dashboard', loadComponent() {
        return import('./dashboard/dashboard.component').then(m => m.DashboardComponent);
    }, canActivate: [authGuard],
        children: [
           { path: '', component: TableComponent, pathMatch: 'full'},
           { path: 'table', component: TableComponent, pathMatch: 'full'},
           { path: 'chart', component: ChartComponent, pathMatch: 'full', canDeactivate: [restrictGuard]}
        ]
    },  
    {path: '**', redirectTo: 'login'} 
];
