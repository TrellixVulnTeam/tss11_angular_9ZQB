import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "dashboard",
        component : DashboardComponent
      },
      {
        path : "products",
        component : ProductsComponent
      },
      {
        path : "category",
        component : CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
