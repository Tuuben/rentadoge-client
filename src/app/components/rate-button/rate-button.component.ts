import { Component, Input, OnInit } from "@angular/core";
import { DogService } from "src/app/core/dog.service";

@Component({
  selector: "app-rate-button",
  templateUrl: "./rate-button.component.html",
  styleUrls: ["./rate-button.component.scss"]
})
export class RateButtonComponent implements OnInit {
  @Input() dogId: string;
  @Input() currentRating: number;

  constructor(private dogService: DogService) {}

  ngOnInit() {}

  patDog() {
    this.dogService.incremenetRating(this.dogId, this.currentRating);
  }
}
