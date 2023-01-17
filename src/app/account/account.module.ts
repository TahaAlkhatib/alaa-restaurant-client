import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { LoginSignUpComponent } from "./login-signup/login-signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const materials = [
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ]
  
@NgModule({
    imports:[
        ...materials,
        AccountRoutingModule],
    declarations:[
        SignInComponent,
        SignUpComponent,
        LoginSignUpComponent,
        AccountComponent,
        ProfileComponent
    ]
})
export class AccountModule{}