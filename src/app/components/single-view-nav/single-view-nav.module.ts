import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { SingleViewNavComponent } from "./single-view-nav.component";

@NgModule({
  declarations: [SingleViewNavComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [SingleViewNavComponent]
})
export class SingleViewNavModule {}
