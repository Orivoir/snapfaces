import { NgModule } from "@angular/core"
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatChipsModule} from "@angular/material/chips"
import {MatDividerModule} from "@angular/material/divider"
import {MatIconModule} from "@angular/material/icon"
import {MatBadgeModule} from "@angular/material/badge"
import {MatTooltipModule} from "@angular/material/tooltip"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
