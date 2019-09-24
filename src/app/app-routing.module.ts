import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TossComponent} from "./components/toss/toss.component";

const routes: Routes = [
  {path: '', redirectTo: 'toss', pathMatch: 'full'},
  {path :'toss', component: TossComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
