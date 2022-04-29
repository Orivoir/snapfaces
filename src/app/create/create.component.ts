import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MatChipInputEvent } from "@angular/material/chips"
import { Router } from "@angular/router"
import SnapfaceModel from "../models/snapface.model"
import { SnapfaceApiService } from "../snapface-api.service"

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {

  snapfaceForm!: FormGroup

  tags: string[] = ["lorem", "ipsum"]

  constructor(
    private formBuilder: FormBuilder,
    private snapfaceApiService: SnapfaceApiService,
    private router: Router) { }

  onRemoveTag(tag: string) {
    this.tags = this.tags.filter((currentTag: string) => (
      currentTag !== tag
    ))
  }

  onNewTag(event: MatChipInputEvent): void {

    let tagValue = (event.value || "").trim()

    if(!!tagValue.length) {
      if(tagValue.charAt(0) == "#") {
        tagValue = tagValue.slice(1,)
      }

      this.tags.push(tagValue)
    }

    event.chipInput?.clear()
  }

  onSubmitSnapface() {
    const {
      title,
      describe,
      imageUrl,
      comment
    } = this.snapfaceForm.value

    const createdSnapface: SnapfaceModel = this.snapfaceApiService.create({
      title,
      describe,
      imageUrl,
      comment,
      tags: this.tags,
      countSnaps: 0,
      createAt: Date.now()
    })

    this.router.navigateByUrl(`snapface/${createdSnapface.id}`)
  }

  onNavigationBack(): void {
    this.router.navigateByUrl("snapfaces")
  }

  ngOnInit(): void {

    this.snapfaceForm = this.formBuilder.group({
      title: [
        null,
        [
          Validators.required,
          Validators.pattern(/^.{2,60}$/i)
        ]
      ],
      describe: [
        null,
        [
          Validators.required,
          Validators.pattern(/^.{6,255}$/)
        ]
      ],
      imageUrl: [
        null,
        [
          Validators.required,
          Validators.pattern(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)
        ]
      ],
      comment: [null]
    })

  }

}
