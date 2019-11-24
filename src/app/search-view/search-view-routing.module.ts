import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchViewComponent } from './search-view.component';

const routes: Routes = [{ path: '', component: SearchViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchViewRoutingModule { }
