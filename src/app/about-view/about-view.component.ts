import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApolloQueryResult } from "apollo-client";
import { Observable } from "rxjs";
import { DogService } from "../core/dog.service";

@Component({
  selector: "app-about-view",
  templateUrl: "./about-view.component.html",
  styleUrls: ["./about-view.component.scss"]
})
export class AboutViewComponent implements OnInit {
  breedQueryRes: Observable<ApolloQueryResult<{ breed: Breed }>>;

  constructor(private dogService: DogService, private route: ActivatedRoute) {}

  ngOnInit() {
    const breedId = this.route.snapshot.params.breedId;
    this.breedQueryRes = this.dogService.getBreed(breedId).valueChanges;
  }
}
