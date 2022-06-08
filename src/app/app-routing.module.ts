import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingCardComponent } from './interactive-rating/rating-card/rating-card.component';
import { ThankYouCardComponent } from './interactive-rating/thank-you-card/thank-you-card.component';

const routes: Routes = [
  {path: '', component: RatingCardComponent},
  {path: 'thank-you/:rating', component: ThankYouCardComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

