import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  router: Router = inject(Router);

  handleNavigateSignIn(){
    this.router.navigateByUrl("/sign-in");
  }
}
