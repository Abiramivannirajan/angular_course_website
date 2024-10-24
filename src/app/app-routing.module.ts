import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { ApplyComponent } from './apply/apply.component';
import { SubmitComponent } from './submit/submit.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: ContainerComponent},
    {path:'login',component:LoginComponent},
    {path:'apply',component:ApplyComponent},
    {path:'Submitpage',component:SubmitComponent},
    {path: 'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
