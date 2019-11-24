import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroModule } from "../components/hero/hero.module";
import { MobileNavigationModule } from "../components/mobile-navigation/mobile-navigation.module";
import { LayoutModule } from "../layout/layout.module";
import { DiscoverViewRoutingModule } from "./discover-view-routing.module";
import { DiscoverViewComponent } from "./discover-view.component";

@NgModule({
  declarations: [DiscoverViewComponent],
  imports: [
    CommonModule,
    LayoutModule,
    DiscoverViewRoutingModule,
    HeroModule,
    MobileNavigationModule
  ]
})
export class DiscoverViewModule {}
