import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';
import { ApplyColorDirective } from './apply-color.directive';
import { CustomeAttributeDirectiveDemoComponent } from './custome-attribute-directive-demo/custome-attribute-directive-demo.component';
import { DataService } from './data.service';
import { UseDataServiceComponent } from './use-data-service/use-data-service.component';
import { Trim2lengthPipe } from './trim2length.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { APICallDemoComponent } from './apicall-demo/apicall-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    DataBindingComponent,
    StructuralDirectiveDemoComponent,
    ApplyColorDirective,
    CustomeAttributeDirectiveDemoComponent,
    UseDataServiceComponent,
    Trim2lengthPipe,
    ProductDetailsComponent,
    ObservableDemoComponent,
    APICallDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // RouterModule.forRoot(
    //   [
    //     {path: '', component: DataBindingComponent},
    //     {path: 'home', component: ProductListComponent},
    //     {path: 'about', component: StructuralDirectiveDemoComponent},
    //     {path: 'contact', component: UseDataServiceComponent}
    //   ]
    // )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
