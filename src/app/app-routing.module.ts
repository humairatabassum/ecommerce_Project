// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component:AppComponent }, // Redirect to the product list
  { path: 'create', component: ProductCreateComponent },
  { path: 'list', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
