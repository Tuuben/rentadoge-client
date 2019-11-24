import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"]
})
export class ImageComponent implements OnInit, AfterViewChecked {
  @ViewChild("img", { static: false }) img: ElementRef<HTMLImageElement>;
  @Input() src: string;
  @Input() alt: string;

  @Input() xOffset = 0;
  @Input() yOffset = 0;

  translateAmt = 16;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.img.nativeElement.style.transform = `
      translate(
        ${this.translateAmt * this.clamp(this.xOffset)}px,
        ${this.translateAmt * this.clamp(this.yOffset)}px
      )
    `;
  }

  clamp(value: number) {
    return Math.min(Math.max(value, -1), 1);
  }
}
