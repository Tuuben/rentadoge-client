import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutModule } from "../components/layout/layout.module";
import { SingleViewNavModule } from "../components/single-view-nav/single-view-nav.module";
import { DogService } from "../core/dog.service";
import { AboutViewRoutingModule } from "./about-view-routing.module";
import { AboutViewComponent } from "./about-view.component";

@NgModule({
  declarations: [AboutViewComponent],
  providers: [DogService],
  imports: [
    CommonModule,
    LayoutModule,
    SingleViewNavModule,
    AboutViewRoutingModule
  ]
})
export class AboutViewModule {}
