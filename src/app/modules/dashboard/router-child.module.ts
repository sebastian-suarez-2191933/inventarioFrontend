import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from '../categoria/components/categoria/categoria.component';

const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'categorias', component: CategoriaComponent}]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
    providers: []
})
export class RouterChildModule { }
