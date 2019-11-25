import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { ApolloQueryResult } from "apollo-client";
import { Observable, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { DogService } from "src/app/core/dog.service";
import { DomService } from "src/app/core/dom.service";

@Component({
  selector: "app-about-products",
  templateUrl: "./about-products.component.html",
  styleUrls: ["./about-products.component.scss"]
})
export class AboutProductsComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("carousel", { static: false }) carousel: ElementRef<
    HTMLDivElement
  >;

  breedsQueryRes: Observable<ApolloQueryResult<{ breeds: Breed[] }>>;
  xOffset: number;
  scrollSub: Subscription;

  constructor(private dogService: DogService, private domService: DomService) {}

  ngOnInit() {
    this.breedsQueryRes = this.dogService.getBreeds().valueChanges;
  }

  ngAfterViewInit() {
    this.scrollSub = this.domService
      .getDivScrollDirection(this.carousel)
      .pipe(tap(res => (this.xOffset = res.xOffset)))
      .subscribe();
  }

  ngOnDestroy() {
    if (!this.scrollSub.closed) {
      this.scrollSub.unsubscribe();
    }
  }
}
