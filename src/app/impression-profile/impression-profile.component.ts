import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-impression-profile',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HomeComponent,FooterComponent,NavbarComponent,RouterOutlet],
  templateUrl: './impression-profile.component.html',
  styleUrl: './impression-profile.component.css'
})
export class ImpressionProfileComponent {

}
