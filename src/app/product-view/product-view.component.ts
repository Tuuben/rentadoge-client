import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DogService } from "../core/dog.service";

@Component({
  selector: "app-product-view",
  templateUrl: "./product-view.component.html",
  styleUrls: ["./product-view.component.scss"]
})
export class ProductViewComponent implements OnInit {
  dogRes: Dog;
  dogId: string;

  constructor(private dogService: DogService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.dogId = this.route.snapshot.params.dogId;
    this.dogRes = this.dogService.getDog(this.dogId);
  }

  reserveDog() {}
}
