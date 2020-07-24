import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AuthUser } from '../common/auth-user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private refreshTokenTimeout;
  private authUserSubject: BehaviorSubject<AuthUser>;
  public authUser: Observable<AuthUser>;

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.authUserSubject = new BehaviorSubject<AuthUser>(null);
    this.authUser = this.authUserSubject.asObservable();
  }

  public get authUserValue(): AuthUser {
    return this.authUserSubject.value;
  }

  public login(uid: string): Observable<AuthUser> {
    const apiCalled = "Doorman/authenticate";

    const params = new HttpParams()
      .set('uid', uid);

    return this.http.get<AuthUser>(`${environment.apiUrl}${apiCalled}`, { params })
      .pipe(map((authUser: AuthUser) => {
        this.authUserSubject.next(authUser);
        this.startRefreshTokenTimer();
        return authUser;
      }));
  }

  public logout(): void {
    const apiCalled = "Doorman/revoke-token";

    this.http.post<any>(`${environment.apiUrl}${apiCalled}`, {}, { withCredentials: true }).subscribe();
    this.stopRefreshTokenTimer();
    this.authUserSubject.next(null);
    //this.router.navigate(['/login']);
    this.document.location.href = 'http://localhost/compas/login'; // get out of here
  }

  public refreshToken(): Observable<AuthUser> {
    const apiCalled = "Doorman/refresh-token";

    return this.http.post<any>(`${environment.apiUrl}${apiCalled}`, {}, { withCredentials: true })
      .pipe(map((authUser: AuthUser) => {
        this.authUserSubject.next(authUser);
        this.startRefreshTokenTimer();
        return authUser;
      }));
  }

  // private code

  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(this.authUserValue.jwtToken.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }

}
