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
import { fadeInAnimation } from "src/app/core/animations/fade-in.animation";
import { DogService } from "src/app/core/dog.service";
import { DomService } from "src/app/core/dom.service";

@Component({
  selector: "app-highlighted-products",
  templateUrl: "./highlighted-products.component.html",
  styleUrls: ["./highlighted-products.component.scss"],
  animations: [fadeInAnimation]
})
export class HighlightedProductsComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("carousel", { static: false }) carousel: ElementRef<
    HTMLDivElement
  >;

  xOffset = 0;
  dogsQueryRes: Observable<ApolloQueryResult<{ dogs: Dog[] }>>;
  scrollSub: Subscription;

  constructor(private dogService: DogService, private domService: DomService) {}

  ngOnInit() {
    this.dogsQueryRes = this.dogService.getHighlightedDogs().valueChanges;
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
