import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CountryLanguageComponent } from "./country-language/country-language.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { LatestSearchComponent } from "./search/latest-search/latest-search.component";
import { SearchComponent } from "./search/search.component";

const materials = [
  MatToolbarModule,
  MatIconModule,
  MatListModule,
]

@NgModule({
  imports: [
    ...materials,
    HomeRoutingModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    SearchComponent,
    LatestSearchComponent,
    CountryLanguageComponent
  ]
})
export class HomeModule { }
