import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { SearchComponent } from "./search/search.component";

const materials = [
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  imports: [
    ...materials,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    SearchComponent
  ]
})
export class HomeModule { }
