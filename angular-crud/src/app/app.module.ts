import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import reactive form
import { ReactiveFormsModule } from '@angular/forms';
//import routes
import { RouterModule, Routes } from '@angular/router';
//import signin component
import { SigninComponent } from './pages/account/signin/signin.component';
//import register component
import { RegisterComponent } from './pages/account/register/register.component';

//declare page path using const
const appRoutes:Routes=[
  {
    path:'', //use empty route for set default page property
    component:SigninComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    //declare signin component
    SigninComponent,
    //declare register component
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //imports reactive form module
    ReactiveFormsModule,
    //import router module
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
