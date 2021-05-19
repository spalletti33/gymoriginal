import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


//componentes - paginas asociadas
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {ActividadesComponent} from './actividades/actividades.component';



//ruta
const appRoutes: Routes = [

    {path : '', component: HomeComponent},
    {path : 'home', component: HomeComponent},
    {path : 'contacto', component: ContactoComponent},
    {path : 'actividades', component: ActividadesComponent},
    //{path : '**', component: homeComponent}


];


export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);