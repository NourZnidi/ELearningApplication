import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HomeComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
