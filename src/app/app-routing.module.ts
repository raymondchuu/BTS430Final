import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GuardAuthService } from './guard-auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactusComponent, canActivate: [GuardAuthService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
