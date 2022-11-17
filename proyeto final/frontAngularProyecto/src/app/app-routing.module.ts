import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PantherCreateComponent } from './panther/panther-create/panther-create.component';
import { PantherListComponent } from './panther/panther-list/panther-list.component';
import { PantherUpdateComponent } from './panther/panther-update/panther-update.component';
import { SuitListComponent } from './suit/suit-list/suit-list.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'ListView', component: PantherListComponent, canActivate: [AuthGuard]},
  { path: 'CreateP', component: PantherCreateComponent},
  { path: 'ModP', component: PantherUpdateComponent},
  {path: 'SuitsView', component:SuitListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
