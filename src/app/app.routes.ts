import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoyenneBacComponent } from './moyenne-bac/moyenne-bac.component';
import { ImpressionProfileComponent } from './impression-profile/impression-profile.component';
import { ChoixMasterComponent } from './choix-master/choix-master.component';
import { CurusUnversitaireComponent } from './curus-unversitaire/curus-unversitaire.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  {path:'signUp',component:SignUpComponent},
  { path: 'home', component: HomeComponent ,children:[
    {path:'profile',component:ProfileComponent},
    {path:'moyennebac',component:MoyenneBacComponent},
    {path:'impression',component:ImpressionProfileComponent},
    {path:'choix',component:ChoixMasterComponent},
    {path:'curus',component:CurusUnversitaireComponent},

]},
];
