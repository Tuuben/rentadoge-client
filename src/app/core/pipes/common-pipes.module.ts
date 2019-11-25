import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TextLengthPipe } from "./text-length.pipe";

@NgModule({
  declarations: [TextLengthPipe],
  imports: [CommonModule],
  exports: [TextLengthPipe]
})
export class CommonPipesModule {}
