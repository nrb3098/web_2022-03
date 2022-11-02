import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PantherListComponent } from './panther/panther-list/panther-list.component';
import { PantherEditComponent } from './panther/panther-edit/panther-edit.component';
import { PantherCreateComponent } from './panther/panther-create/panther-create.component';
import { PantherDeleteComponent } from './panther/panther-delete/panther-delete.component';
import { PantherUpdateComponent } from './panther/panther-update/panther-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PantherListComponent,
    PantherEditComponent,
    PantherCreateComponent,
    PantherDeleteComponent,
    PantherUpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
