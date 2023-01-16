import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routs = []

@NgModule({
    imports:[RouterModule.forChild(routs)],
    exports:[RouterModule]
})
export class AccountRoutingModule{}