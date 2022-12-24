import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncoderComponent } from './_components/encoder/encoder.component';
import { LoginComponent } from './_components/login/login.component';
import { AuthGuardService } from './_services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'encoder',
    component: EncoderComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
