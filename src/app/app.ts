import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';

import { MenuComponent } from './menu/menu';
import { HomeComponent } from './home/home';
import { FooterComponent } from './footer/footer';
import { LoginComponent } from './login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MaterialModule,
    RouterOutlet,
    MenuComponent,
    FooterComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = signal('Loja Gamer');
}
