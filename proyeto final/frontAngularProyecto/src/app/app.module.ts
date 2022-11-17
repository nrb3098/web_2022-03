import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SuitCreateComponent } from './suit/suit-create/suit-create.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8180',
        realm: 'DWRealm',
        clientId: 'dw-app'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    PantherListComponent,
    PantherCreateComponent,
    PantherDeleteComponent,
    PantherUpdateComponent,
    SuitListComponent,
    NavbarComponent,
    SuitCreateComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    KeycloakAngularModule,
    NgbModule,
  ],
  providers: [{provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
