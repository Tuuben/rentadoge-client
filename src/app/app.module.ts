import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { QuicklinkModule } from "ngx-quicklink";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QuicklinkModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
