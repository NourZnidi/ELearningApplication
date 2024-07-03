import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SignupService } from '../services/signup.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,HomeComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

    submitted=false;

  signUpForm:FormGroup=new FormGroup({
    Photo:new FormControl(''),
    cin:new FormControl(''),
    nomF:new FormControl(''),
    prenomF : new FormControl(''),
    nomA: new FormControl(''),
    prenomA:new FormControl(''),
    datenaissance:new FormControl(''),
    lieunaissance:new FormControl(''),
    adresse:new FormControl(''),
    emailAdresse:new FormControl(''),
    telephone:new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),




  })

  constructor(private signupService : SignupService , private FB: FormBuilder){
  }

  ngOnInit(): void {
    this.signUpForm=this.FB.group({
      Photo:['',Validators.required],
      cin:['',Validators.required],
      nomF:['',[Validators.required,Validators.minLength(3)]],
      prenomF:['',[Validators.required,Validators.min(3)]],
      nomA:['',Validators.required],
      prenomA:['',Validators.required],
      datenaissance:['',Validators.required,],
      lieunaissance:['',Validators.required],
      adresse:['',Validators.required],
      emailAdresse:['',[Validators.required,Validators.email]],
      telephone:['',Validators.required],
      login:['',Validators.required],
      password:['',[Validators.required,Validators.min(8),Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]],
      })
      
  }
  Signup(){
    this.submitted=true;
    if(this.signUpForm.valid){

    }
  }
  

}
