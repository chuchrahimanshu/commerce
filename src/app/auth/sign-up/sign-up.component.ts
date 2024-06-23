import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpInterface } from 'src/app/interfaces/auth.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  router: Router = inject(Router);
  userService: UserService = inject(UserService);

  handleNavigateSignIn(){
    this.router.navigateByUrl("/sign-in");
  }
  handleFormSubmit(form: NgForm): void{
    const apiData: SignUpInterface = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      role: form.value.seller === true ? "SELLER" : "USER"
    };

    this.userService.signUpAPI(apiData).subscribe((response) => {
      console.log(response);
    });
  }
}
