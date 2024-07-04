import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-curus-unversitaire',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
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
