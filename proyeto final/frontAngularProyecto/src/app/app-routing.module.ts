import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PantherListComponent } from './panther/panther-list/panther-list.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'ListView', component: PantherListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
