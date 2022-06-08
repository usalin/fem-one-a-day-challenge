import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you-card',
  templateUrl: './thank-you-card.component.html',
  styleUrls: ['./thank-you-card.component.scss']
})
export class ThankYouCardComponent implements OnInit {
  rating!:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => this.rating = data.rating);
  }

}
