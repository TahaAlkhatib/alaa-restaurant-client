import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account.component";
import { LoginSignUpComponent } from "./login-signup/login-signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routs: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: '',
                component: LoginSignUpComponent
            },
            {
                path: 'sign-in',
                component: SignInComponent,
            },
            {
                path: 'sign-up',
                component: SignUpComponent
            }
        ]

    }
    ,
    {
        path: 'profile',
        component: ProfileComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routs)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }