import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseViewComponent } from './browse-view.component';

const routes: Routes = [{ path: '', component: BrowseViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseViewRoutingModule { }
