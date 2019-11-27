import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material";
import { DogService } from "./../../core/dog.service";
import { RateButtonComponent } from "./rate-button.component";

@NgModule({
  declarations: [RateButtonComponent],
  providers: [DogService],
  imports: [CommonModule, MatIconModule],
  exports: [RateButtonComponent]
})
export class RateButtonModule {}
