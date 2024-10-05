import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'product/:id',component:SingleComponent}
];