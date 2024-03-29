import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { AboutProductsModule } from "../components/about-products/about-products.module";
import { HeroModule } from "../components/hero/hero.module";
import { HighlightedProductsModule } from "../components/highlighted-products/highlighted-products.module";
import { LayoutModule } from "../components/layout/layout.module";
import { MobileNavigationModule } from "../components/mobile-navigation/mobile-navigation.module";
import { NavigationModule } from "../components/navigation/navigation.module";
import { UserBookingModule } from "../components/user-booking/user-booking.module";
import { DiscoverViewRoutingModule } from "./discover-view-routing.module";
import { DiscoverViewComponent } from "./discover-view.component";

@NgModule({
  declarations: [DiscoverViewComponent],
  imports: [
    CommonModule,
    LayoutModule,
    NavigationModule,
    DiscoverViewRoutingModule,
    HeroModule,
    HighlightedProductsModule,
    AboutProductsModule,
    MobileNavigationModule,
    UserBookingModule,
    MatIconModule
  ]
})
export class DiscoverViewModule {}
