import { NgModule } from "@angular/core";
import { LoginComponent } from "src/libs/upupa/membership/src";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
    imports:[AccountRoutingModule],
    declarations:[
        SignInComponent,
        SignUpComponent,
        LoginComponent,
        AccountComponent,
        ProfileComponent
    ]
})
export class AccountModule{}