import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MapaComponent } from './component/mapa/mapa.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './component/tienda/tienda.component';



export const routes: Routes = [
    { path: 'home', component: HomeComponent},
   { path: 'tienda', component: TiendaComponent },
    { path: 'dashboard' , component: DashboardComponent },
    { path: 'mapa', component: MapaComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home' , pathMatch: 'full' }
];

