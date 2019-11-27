import { Component, OnInit } from "@angular/core";
import { fadeInCrawlAnimation } from "src/app/core/animations/fade-in.animation";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
  animations: [fadeInCrawlAnimation]
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
