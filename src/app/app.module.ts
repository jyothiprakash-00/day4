import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DistrictComponent } from './pages/district/district.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SingleComponent } from './single/single.component';
import { query } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactusComponent,
    SignupComponent,
    DistrictComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
