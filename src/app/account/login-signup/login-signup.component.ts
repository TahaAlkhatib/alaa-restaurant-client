import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'login-signup',
    templateUrl: 'login-signup.component.html',
    styleUrls: ['login-signup.component.scss']
})
export class LoginSignUpComponent {
    constructor(private router: Router) {

    }
    goTo() {
        this.router.navigate(['account/profile'])
    }
}