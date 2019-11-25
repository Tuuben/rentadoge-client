import { ElementRef, Injectable } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class DomService {
  /* Scroll offset */
  xOffset = 0;
  yOffset = 0;
  lastScrollLeft = 0;
  lastScrollTop = 0;

  constructor() {}

  getDivScrollDirection(
    divRef: ElementRef
  ): Observable<{ xOffset: number; yOffset: number }> {
    const scrollObs = fromEvent(divRef.nativeElement, "scroll");

    return scrollObs.pipe(
      map(event => {
        const scrollLeft = divRef.nativeElement.scrollLeft;
        const scrollTop = divRef.nativeElement.scrollTop;

        this.xOffset = this.lastScrollLeft - scrollLeft > 0 ? -1 : 1;
        this.yOffset = this.lastScrollTop - scrollTop > 0 ? -1 : 1;

        this.lastScrollLeft = scrollLeft;
        this.lastScrollTop = scrollTop;

        return { xOffset: this.xOffset, yOffset: this.yOffset };
      })
    );
  }
}
