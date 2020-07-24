import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.authUserValue;
        if (user) {
            // logged in so return true
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            this.document.location.href = 'http://compas/login';
            return false;
        }
    }
}