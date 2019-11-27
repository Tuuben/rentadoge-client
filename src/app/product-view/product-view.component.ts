import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApolloQueryResult } from "apollo-client";
import { Observable } from "rxjs";
import {
  fadeInCrawlAnimation,
  fadeInCrawlDelayAnimation
} from "../core/animations/fade-in.animation";
import { DogService } from "../core/dog.service";

@Component({
  selector: "app-product-view",
  templateUrl: "./product-view.component.html",
  styleUrls: ["./product-view.component.scss"],
  animations: [fadeInCrawlAnimation, fadeInCrawlDelayAnimation]
})
export class ProductViewComponent implements OnInit {
  dogQueryRes: Observable<ApolloQueryResult<{ dog: Dog }>>;
  dogId: string;

  constructor(private dogService: DogService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.dogId = this.route.snapshot.params.dogId;
    this.dogQueryRes = this.dogService.getDog(this.dogId).valueChanges;
  }
}
