import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryLanguageComponent } from "./country-language/country-language.component";
import { HomeComponent } from "./home.component";
import { LatestSearchComponent } from "./search/latest-search/latest-search.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            {
                path:'country-language',
                component:CountryLanguageComponent,
            }
        ]
        
    },
    {
        path:'search',
        component:SearchComponent,
        children:[
            {
                path: '',
                component: LatestSearchComponent,
                
            }
        ]
    },
    
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
