import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRouterComponent } from './auth-router/auth-router.component';

const routes: Routes = [
  {
    path: "auth",
    component: AuthRouterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
