import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { PantherListComponent } from './panther/panther-list/panther-list.component';
import { PantherCreateComponent } from './panther/panther-create/panther-create.component';
import { PantherDeleteComponent } from './panther/panther-delete/panther-delete.component';
import { PantherUpdateComponent } from './panther/panther-update/panther-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuitListComponent } from './suit/suit-list/suit-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PantherListComponent,
    PantherCreateComponent,
    PantherDeleteComponent,
    PantherUpdateComponent,
    SuitListComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
