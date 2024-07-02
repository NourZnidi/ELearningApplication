import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-choix-master',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HomeComponent,FooterComponent,NavbarComponent,RouterOutlet],
  templateUrl: './choix-master.component.html',
  styleUrl: './choix-master.component.css'
})
export class ChoixMasterComponent {

}
