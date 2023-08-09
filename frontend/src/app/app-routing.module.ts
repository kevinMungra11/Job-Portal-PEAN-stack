import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './public/public/public.module';
import { UserModule } from './user/user/user.module';
import { AdminModule } from './admin/admin/admin.module';
import { AuthModule } from './auth/auth/auth.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => PublicModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '**', redirectTo: '/home' }, // handle all other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
