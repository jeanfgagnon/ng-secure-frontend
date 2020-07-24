import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AgentModel } from 'src/app/models/agent-model';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private returnUrl: string;
  public loading = false;
  public error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService) {

    // redirect to home if already logged in
    if (this.authService.authUserValue) {
      this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.route.queryParamMap.subscribe(params => {
      const uid = params.get('uid');
      this.loading = true;
      this.authService.login(uid).pipe(first()).subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
    });
  }

}
