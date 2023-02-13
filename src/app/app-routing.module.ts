import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'single',
    component:SingleComponent
  },
  {
    path:'district',
    component:DistrictComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
