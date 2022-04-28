import SnapfaceDTO from "../dto/snapface.dto"
import {v4 as uuidv4} from "uuid"

export default class SnapfaceModel {

  public title: string
  public describe: string
  public imageUrl: string
  public createAt: number
  public countSnaps: number
  public tags: string[]
  public comment?: string

  public hasSnaped: boolean = false
  public id: string

  constructor(snapface: SnapfaceDTO) {

    this.id = uuidv4()

    const {
      title,
      countSnaps,
      createAt,
      describe,
      imageUrl,
      tags,
      comment
    } = snapface

    this.title = title
    this.describe = describe
    this.imageUrl = imageUrl
    this.createAt = createAt
    this.countSnaps = countSnaps
    this.tags = tags
    this.comment = comment
  }

  get createAtUI(): string {
    return new Date(this.createAt).toLocaleString()
  }

};
