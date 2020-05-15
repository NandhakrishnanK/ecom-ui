import { ExpiryAnalysisComponent } from './expiry-analysis/expiry-analysis.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'product', component: ProductComponent},
  { path: 'expiry', component: ExpiryAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
