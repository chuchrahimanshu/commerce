import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  router: Router = inject(Router);

  handleNavigateSignUp(){
    this.router.navigateByUrl("/sign-up");
  }
}
