import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-home',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions, MatGridListModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
