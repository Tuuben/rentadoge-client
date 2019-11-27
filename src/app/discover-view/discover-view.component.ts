import { Component, OnInit } from "@angular/core";
import { fadeInCrawlAnimation } from "../core/animations/fade-in.animation";

@Component({
  selector: "app-discover-view",
  templateUrl: "./discover-view.component.html",
  styleUrls: ["./discover-view.component.scss"],
  animations: [fadeInCrawlAnimation]
})
export class DiscoverViewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
