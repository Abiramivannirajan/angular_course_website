import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  { path: '', component: ContainerComponent},
    {path:'login',component:LoginComponent},
    {path:'apply',component:ApplyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
