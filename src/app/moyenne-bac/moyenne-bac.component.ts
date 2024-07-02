import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-moyenne-bac',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HomeComponent,FooterComponent,NavbarComponent,RouterOutlet],
  templateUrl: './moyenne-bac.component.html',
  styleUrl: './moyenne-bac.component.css'
})
export class MoyenneBacComponent {

}
