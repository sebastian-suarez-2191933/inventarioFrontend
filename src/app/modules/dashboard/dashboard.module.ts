import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriaModule } from '../categoria/categoria.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CategoriaModule,
  ]
})
export class DashboardModule { }
