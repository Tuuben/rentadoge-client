import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { DogService } from "src/app/core/dog.service";
import { DomService } from "src/app/core/dom.service";

@Component({
  selector: "app-highlighted-products",
  templateUrl: "./highlighted-products.component.html",
  styleUrls: ["./highlighted-products.component.scss"]
})
export class HighlightedProductsComponent
  implements OnInit, AfterViewInit, OnDestroy {
  src =
    "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg";

  @ViewChild("carousel", { static: false }) carousel: ElementRef<
    HTMLDivElement
  >;

  xOffset = 0;
  dogsRes: Dog[];
  scrollSub: Subscription;

  constructor(private dogService: DogService, private domService: DomService) {}

  ngOnInit() {
    this.dogsRes = this.dogService.getHighlightedDogs();
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
