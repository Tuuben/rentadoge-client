import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundViewComponent } from './not-found-view.component';

const routes: Routes = [{ path: '', component: NotFoundViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundViewRoutingModule { }
