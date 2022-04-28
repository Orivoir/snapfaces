import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import SnapfaceModel from "../models/snapface.model"
import { SnapfaceApiService } from "../snapface-api.service"

@Component({
  selector: "app-snapfaces",
  templateUrl: "./snapfaces.component.html",
  styleUrls: ["./snapfaces.component.scss"]
})
export class SnapfacesComponent implements OnInit {

  snapfaces: SnapfaceModel[] = []

  constructor(
    private snapfaceApiService: SnapfaceApiService,
    private router: Router) {}

  ngOnInit(): void {

    if(!this.snapfaceApiService.readAll().length) {
      SnapfaceApiService.FIXTURES.forEach((snapfaceFixture: SnapfaceModel) => (
        this.snapfaceApiService.create(snapfaceFixture)
      ))
    }

    this.snapfaces = this.snapfaceApiService.readAll()
  }

  onViewSnapface(id: string): void {
    this.router.navigateByUrl(`snapface/${id}`)
  }

}
