import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';
import { UseDataServiceComponent } from './use-data-service/use-data-service.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { APICallDemoComponent } from './apicall-demo/apicall-demo.component';
import { GuardService } from './guard.service';


const routes: Routes = [
  { path: '', component: APICallDemoComponent },
  { path: 'home', component: ProductListComponent,
  canActivate: [GuardService],
  children: [{ path: 'product-details/:pid', component: ProductDetailsComponent }] },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
  { path: 'about', component: StructuralDirectiveDemoComponent },
  { path: 'contact', component: UseDataServiceComponent },
  { path: 'login', component: DataBindingComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
