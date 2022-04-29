import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CreateComponent } from "./create/create.component"
import { HomeComponent } from "./home/home.component"
import { SingleSnapfaceComponent } from "./single-snapface/single-snapface.component"
import { SnapfacesComponent } from "./snapfaces/snapfaces.component"

const routes: Routes =  [
  {path: "", component: HomeComponent},
  {path: "snapfaces/create", component: CreateComponent},
  {path: "snapfaces", component: SnapfacesComponent},
  {path: "snapface/:id", component: SingleSnapfaceComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
