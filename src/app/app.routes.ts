import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { FooterComponent } from './footer/footer';
import { ProdutosLista } from './produtos-lista/produtos-lista';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'produtos', component: ProdutosLista },
    { path: 'cadastro', component: ProdutosCadastroComponent },
    { path: '**', redirectTo: '' }
];