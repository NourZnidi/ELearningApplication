import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HomeComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
