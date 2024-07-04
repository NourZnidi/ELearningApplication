import { FooterComponent } from './footer/footer.component';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoyenneBacComponent } from './moyenne-bac/moyenne-bac.component';
import { CurusUnversitaireComponent } from './curus-unversitaire/curus-unversitaire.component';
import { ChoixMasterComponent } from './choix-master/choix-master.component';
import { ImpressionProfileComponent } from './impression-profile/impression-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, AppComponent,RouterLink,RouterLinkActive,CommonModule,RouterOutlet,HomeComponent,SignInComponent,SignUpComponent,MoyenneBacComponent,CurusUnversitaireComponent,ChoixMasterComponent,ImpressionProfileComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ELearningApplication';
}
