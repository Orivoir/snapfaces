import { Injectable } from "@angular/core"
import SnapfaceDTO from "./dto/snapface.dto"
import SnapfaceModel from "./models/snapface.model"

export type SnapfaceSetter =
  ((snapface: SnapfaceModel) => SnapfaceModel) |
  Partial<SnapfaceDTO>;

@Injectable({
  providedIn: "root"
})
export class SnapfaceApiService {

  static FIXTURES: SnapfaceModel[] = [
    new SnapfaceModel({
      countSnaps: 0,
      createAt: Date.now(),
      title: "Non est et elit",
      describe: " do sit labore enim eu duis mollit exercitation.",
      imageUrl: "https://picsum.photos/id/684/600/400",
      tags: ["Lorem", "ipsum", "amet"],
    }),
    new SnapfaceModel({
      countSnaps: 3,
      createAt: Date.now(),
      title: "Enim nostrud nisi",
      describe: "Ad consequat tempor consequat quis ea sint aliqua incididunt in.",
      imageUrl: "https://picsum.photos/id/42/600/400",
      tags: ["Lorem", "ipsum"],
      comment: "Quis cupidatat sint minim quis."
    }),
    new SnapfaceModel({
      countSnaps: 8,
      createAt: Date.now(),
      title: "Occaecat officia.",
      describe: "Tempor culpa cillum ullamco labore dolor irure.",
      imageUrl: "https://picsum.photos/id/196/600/400",
      tags: ["culpa", "irure"]
    })
  ]

  private snapfaces: SnapfaceModel[] = []

  constructor() {}

  readAll() {
    return this.snapfaces
  }

  create(parameters: SnapfaceDTO | SnapfaceModel): SnapfaceModel {

    if(parameters instanceof SnapfaceModel) {
      this.snapfaces.push(parameters)
      return parameters

    } else {
      const snapfaceCreated = new SnapfaceModel(parameters)

      this.snapfaces.push(snapfaceCreated)

      return snapfaceCreated
    }

  }
  read(id: string): SnapfaceModel | null {
    return this.snapfaces.find((snapface: SnapfaceModel): boolean => (
      snapface.id === id
    )) || null
  }
  update(id: string, setter: SnapfaceSetter): SnapfaceModel | null {

    let snapfaceModified: SnapfaceModel | null = null

    this.snapfaces = this.snapfaces.map((snapface: SnapfaceModel): SnapfaceModel => {

      if(snapface.id === id) {

        snapfaceModified = snapface

        if(setter instanceof Function) {
          return setter(snapface)
        } else {
          if(setter.comment) {
            snapface.comment = setter.comment
          }
          if(setter.countSnaps) {
            snapface.countSnaps = setter.countSnaps
          }
          if(setter.createAt) {
            snapface.createAt = setter.createAt
          }
          if(setter.describe) {
            snapface.describe = setter.describe
          }
          if(setter.tags) {
            snapface.tags = setter.tags
          }
          if(setter.title) {
            snapface.title = setter.title
          }
          if(setter.imageUrl) {
            snapface.imageUrl = setter.imageUrl
          }
          return snapface
        }
      } else {
        return snapface
      }
    })

    return snapfaceModified

  }
  delete(id: string): SnapfaceModel | null {

    let snapfaceDeleted: SnapfaceModel | null = null

    this.snapfaces = this.snapfaces.filter((snapface: SnapfaceModel): boolean => {

      const isTarget: boolean = snapface.id === id

      if(isTarget) {
        snapfaceDeleted = snapface
      }

      return isTarget
    })

    return snapfaceDeleted
  }

}
