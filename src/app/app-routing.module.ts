import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingCardComponent } from './interactive-rating/rating-card/rating-card.component';

const routes: Routes = [
  {path: '', component: RatingCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

