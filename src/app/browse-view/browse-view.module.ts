import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutModule } from "../components/layout/layout.module";
import { SingleViewNavModule } from "../components/single-view-nav/single-view-nav.module";
import { BrowseViewRoutingModule } from "./browse-view-routing.module";
import { BrowseViewComponent } from "./browse-view.component";

@NgModule({
  declarations: [BrowseViewComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SingleViewNavModule,
    BrowseViewRoutingModule
  ]
})
export class BrowseViewModule {}
