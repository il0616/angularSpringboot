import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { UserComponent } from "./user/user.component";
import { VersionComponent } from "./version/version.component";
import { ProfileComponent } from "./profile/profile.component";
import { ExcelComponent } from "./excel/excel.component";

const routes: Routes = [
    { path: '', component: MainComponent, children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'user', component: UserComponent },
        { path: 'version', component: VersionComponent },
        { path: 'excel', component: ExcelComponent }
    ] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}