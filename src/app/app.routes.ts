import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { authGuard } from './auth.guard';
import { restrictGuard } from './restrict.guard';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { CandidateComponent } from './candidate/candidate.component';

export const routes: Routes = [
    {path: '', component: ChartComponent, pathMatch: 'full'},  
    {path: 'chart', component: ChartComponent, pathMatch: 'full'},   
    {path: 'main/dashboard', loadComponent() {
        return import('./dashboard/dashboard.component').then(m => m.DashboardComponent);
    }, canActivate: [authGuard],
        children: [
           { path: '', component: TableComponent, pathMatch: 'full'},
           { path: 'table', component: TableComponent, pathMatch: 'full'},
           { path: 'chart', component: ChartComponent, pathMatch: 'full'}
        ]
    },  
    {path: '**', redirectTo: 'login'} ,
    {path: 'Jobseekers', component: JobseekersComponent, pathMatch: 'full'}, 
    {path: 'Candidate', component: CandidateComponent, pathMatch: 'full'},

];
