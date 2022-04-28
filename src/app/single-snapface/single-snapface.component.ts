import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import SnapfaceModel from "../models/snapface.model"
import { SnapfaceApiService } from "../snapface-api.service"
import {Location} from "@angular/common"
import { animate, style, transition, trigger } from "@angular/animations"
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from "@angular/material/tooltip"

const customTooltipOptions: MatTooltipDefaultOptions = {
  showDelay: 500,
  hideDelay: 150,
  touchendHideDelay: 150
}

@Component({
  selector: "app-single-snapface",
  templateUrl: "./single-snapface.component.html",
  styleUrls: ["./single-snapface.component.scss"],
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: customTooltipOptions
    }
  ],
  animations: [
    trigger("hasSnaped", [
      transition(":leave", [
        animate("75ms", style({
          opacity: 0,
          transform: "translate(100%, 100%)"
        }))
      ])
    ]),
    trigger("hasUnsnaped", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: "translate(-100%, -100%)"
        }),
        animate("75ms", style({
          opacity: 1,
          transform: "translate(25%, -25%)"
        }))
      ])
    ])
  ]
})
export class SingleSnapfaceComponent implements OnInit {

  public snapface: SnapfaceModel | null = null

  constructor(
    private snapfaceApiService: SnapfaceApiService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const snapfaceId: string = this.route.snapshot.params["id"]

    this.snapface = this.snapfaceApiService.read(snapfaceId)

    if(!this.snapface) {
      console.warn(`cant get snapface for id "${snapfaceId}"`)
      this.location.back()
    }
  }

  onFavoriteSnap(): void {
    this.onToggleFavoriteSnap()
  }

  onUnFavoriteSnap(): void {
    this.onToggleFavoriteSnap()
  }

  onToggleFavoriteSnap(): void {

    if(this.snapface == null) {
      return
    }

    this.snapface.countSnaps += (!this.snapface.hasSnaped ? 1: -1)
    this.snapface.hasSnaped = !this.snapface.hasSnaped
  }

}
