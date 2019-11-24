import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MobileNavigationComponent } from "./mobile-navigation.component";

@NgModule({
  declarations: [MobileNavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [MobileNavigationComponent]
})
export class MobileNavigationModule {}
