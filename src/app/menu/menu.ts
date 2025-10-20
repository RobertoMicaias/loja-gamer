import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  imports: [MatToolbar, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {

}
