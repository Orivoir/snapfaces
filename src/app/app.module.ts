import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import {HeaderModule} from "./header/header.module"
import { AppRoutingModule } from "./app-routing.module"
import { HomeComponent } from "./home/home.component"
import { MaterialModule } from "./material/material.module"
import { CreateComponent } from "./create/create.component"
import { SnapfacesComponent } from "./snapfaces/snapfaces.component"
import { RouterModule } from "@angular/router"
import { SingleSnapfaceComponent } from "./single-snapface/single-snapface.component"
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    SnapfacesComponent,
    SingleSnapfaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HeaderModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
