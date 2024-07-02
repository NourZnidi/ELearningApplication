import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-curus-unversitaire',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HomeComponent,FooterComponent,NavbarComponent,RouterOutlet],
  templateUrl: './curus-unversitaire.component.html',
  styleUrl: './curus-unversitaire.component.css'
})
export class CurusUnversitaireComponent {



}
