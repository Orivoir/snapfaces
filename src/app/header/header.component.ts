import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {

  @Input() title: string = "hello world"

  constructor(private router: Router) { }

  onCreateSnapface(): void {
    this.router.navigateByUrl("snapfaces/create")
  }

}
