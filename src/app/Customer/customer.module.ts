import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { CompanyComponent } from './components/company/company.component';


@NgModule({
  declarations: [
    CustomerComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    SliderComponent,
    ExperiencesComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
