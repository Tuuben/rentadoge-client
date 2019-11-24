import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverViewComponent } from './discover-view.component';

const routes: Routes = [{ path: '', component: DiscoverViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverViewRoutingModule { }
