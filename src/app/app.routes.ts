import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { FooterComponent } from './footer/footer';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: FooterComponent },
    { path: '**', redirectTo: '' }
];
