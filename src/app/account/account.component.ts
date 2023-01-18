import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'account',
    templateUrl:'account.component.html',
    styleUrls:['account.component.scss']
})
export class AccountComponent {
constructor(private router:Router){}

    back(){
        this.router.navigate(['../'])
    }
}