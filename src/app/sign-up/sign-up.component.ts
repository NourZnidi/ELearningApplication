import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SignupService } from '../services/signup.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink,RouterLinkActive,HomeComponent,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  selectedFile: File | null = null;
  submitted=false;

  signUpForm:FormGroup=new FormGroup({
    cin:new FormControl(''),
    nomFr:new FormControl(''),
    prenomFr : new FormControl(''),
    nomAr: new FormControl(''),
    prenomAr:new FormControl(''),
    dateNaissance:new FormControl(''),
    lieuNaissance:new FormControl(''),
    adresse:new FormControl(''),
    email:new FormControl(''),
    photo:new FormControl(''),
    tel:new FormControl('')



  })

  constructor(private signupService : SignupService , private FB: FormBuilder){
  }

  ngOnInit(): void {
    this.signUpForm=this.FB.group({
      cin:['',Validators.required],
      nomFr:['',[Validators.required,Validators.minLength(3)]],
      prenomFr:['',[Validators.required,Validators.minLength(3)]],
      nomAr:['',Validators.required],
      prenomAr:['',Validators.required],
      dateNaissance:['',Validators.required,],
      lieuNaissance:['',Validators.required],
      adresse:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      photo:['',Validators.required],
      tel:['',Validators.required],

      // login:['',Validators.required],
      //password:['',[Validators.required,Validators.min(8),Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]],
      
    })
      
  }

  get f(): { [key: string]: AbstractControl } {
   
    return this.signUpForm.controls;
  }



  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.signUpForm.patchValue({ photo: file.name });
    }
  }



  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('cin', this.signUpForm.get('cin')?.value);
    formData.append('nomFr', this.signUpForm.get('nomFr')?.value);
    formData.append('prenomFr', this.signUpForm.get('prenomFr')?.value);
    formData.append('nomAr', this.signUpForm.get('nomAr')?.value);
    formData.append('prenomAr', this.signUpForm.get('prenomAr')?.value);
    formData.append('dateNaissance', this.signUpForm.get('dateNaissance')?.value);
    formData.append('lieuNaissance', this.signUpForm.get('lieuNaissance')?.value);
    formData.append('adresse', this.signUpForm.get('adresse')?.value);
    formData.append('email', this.signUpForm.get('email')?.value);
    formData.append('tel', this.signUpForm.get('tel')?.value);
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile, this.selectedFile.name);
    }

    this.signupService.add(formData).subscribe((response :any)  => {
      console.log('Form submitted successfully', response);
    }, error => {
      console.error('Error submitting form', error);
    });
  }

}
