import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curus-unversitaire',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,HomeComponent,FooterComponent,NavbarComponent,RouterOutlet],
  templateUrl: './curus-unversitaire.component.html',
  styleUrl: './curus-unversitaire.component.css'
})
export class CurusUnversitaireComponent {
  isOpen = false;
  isLicenceOpen = false;
  isMaitriseOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  toggleLicenceDropdown() {
    this.isLicenceOpen = !this.isLicenceOpen;
    if (this.isLicenceOpen) {
      this.isMaitriseOpen = false;
    }
  }

  toggleMaitriseDropdown() {
    this.isMaitriseOpen = !this.isMaitriseOpen;
    if (this.isMaitriseOpen) {
      this.isLicenceOpen = false;
    }
  }

}
