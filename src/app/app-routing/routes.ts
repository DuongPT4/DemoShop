import {Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductComponent } from '../product/product.component';
import { Product } from '../shared/product';

export const routes : Routes =[
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'products', component:ProductComponent},
    {path:'', redirectTo:'/products', pathMatch:'full'}
]

