import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient, private keycloakService: KeycloakService) { }

  logout() {
    this.keycloakService.clearToken();
    this.keycloakService.logout("http://localhost:4200/");
  }

  userData() {
    console.log(this.keycloakService.isUserInRole("ROLE_ADMIN"));
    console.log(this.keycloakService.getUserRoles());
    console.log(this.keycloakService.loadUserProfile().then(console.log));
  }
}
