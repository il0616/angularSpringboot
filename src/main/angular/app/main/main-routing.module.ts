import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { UserComponent } from "./user/user.component";
import { VersionComponent } from "./version/version.component";

const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'user', component: UserComponent },
    { path: 'version', component: VersionComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}