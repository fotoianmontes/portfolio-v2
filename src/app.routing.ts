import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { MainComponent } from './app/components/admin/main/main.component';
import { AdminHomeComponent } from './app/components/admin/admin-home/admin-home.component';
import { ResumeComponent } from './app/components/resume/resume.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'resume', component: ResumeComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
