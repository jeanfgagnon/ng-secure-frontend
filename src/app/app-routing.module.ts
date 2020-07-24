import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrakRoadMainComponent } from './components/trak-road-main/trak-road-main.component';
import { AuthGuard } from './common/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: TrakRoadMainComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to Main
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
