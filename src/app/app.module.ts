import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ApplyComponent } from './apply/apply.component';
import { SubmitComponent } from './submit/submit.component';
import { buttonValue } from './services/buttonValue.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LoginComponent,
    ApplyComponent,
    SubmitComponent,
    ProfileComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ buttonValue],
  bootstrap: [AppComponent]
})
export class AppModule { }
