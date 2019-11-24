import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { DogService } from "src/app/core/dog.service";

@Component({
  selector: "app-highlighted-products",
  templateUrl: "./highlighted-products.component.html",
  styleUrls: ["./highlighted-products.component.scss"]
})
export class HighlightedProductsComponent implements OnInit, AfterViewInit {
  src =
    "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg";

  @ViewChild("carousel", { static: false }) carousel: ElementRef<
    HTMLDivElement
  >;

  xOffset = 0;
  lastScrollPos: number;
  dogsRes: Dog[];

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.dogsRes = this.dogService.getHighlightedDogs();
  }

  ngAfterViewInit() {
    this.carousel.nativeElement.addEventListener("scroll", event => {
      const scrollLeft = this.carousel.nativeElement.scrollLeft;

      this.xOffset = this.lastScrollPos - scrollLeft > 0 ? -1 : 1;

      this.lastScrollPos = scrollLeft;
    });
  }
}
