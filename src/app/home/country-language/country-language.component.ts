import { Component } from "@angular/core";

@Component({
    selector:'country-language',
    templateUrl:'country-language.component.html',
    styleUrls:['country-language.component.scss']
})
export class CountryLanguageComponent{
    isChecked = false
    countries = [
        {name:'turky',flag:'/assets/icons/flag.svg'},
        {name:'turky',flag:'/assets/icons/flag.svg'},
        {name:'turky',flag:'/assets/icons/flag.svg'},
        {name:'turky',flag:'/assets/icons/flag.svg'},
        {name:'turky',flag:'/assets/icons/flag.svg'},
    ]
}