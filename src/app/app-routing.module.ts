import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'customer',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./Admin/admin.module').then( m => m.AdminModule )
  },
  {
    path:'customer',
    loadChildren: () => import('./Customer/customer.module').then( m => m.CustomerModule )
  },
  {
    path: '**',
    redirectTo: 'customer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
