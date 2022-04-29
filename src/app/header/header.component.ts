import { Location } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"
import { NavigationEnd, Router, Event } from "@angular/router"
import { filter } from "rxjs"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  @Input() title: string = "hello world"

  isCreateRoute: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
    // @TODO: add type check navigation event
    // @TODO: memory leak observable at destroy component

    const navigationEvent$ = this.router.events.pipe(
      filter(routerEvent => routerEvent instanceof NavigationEnd),
    )

    navigationEvent$.subscribe((event: any) => {
      this.isCreateRoute = event.urlAfterRedirects == "/snapfaces/create"
    })
  }

  onCreateSnapface(): void {
    if(!this.isCreateRoute) {
      this.router.navigateByUrl("snapfaces/create")
    } else {
      this.router.navigateByUrl("")
    }
  }

}
