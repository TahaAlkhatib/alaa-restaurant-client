import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'search',
    templateUrl:'search.component.html',
    styleUrls:['search.component.scss']
})
export class SearchComponent{
    constructor(private router:Router){

    }
    back(){
        this.router.navigate(['../'])
    }
}