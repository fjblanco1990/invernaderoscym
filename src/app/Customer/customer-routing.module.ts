import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './components/company/company.component';

const routes: Routes = [
  {
    path:'',
    component: CustomerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'company',
        component: CompanyComponent
      }
    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
