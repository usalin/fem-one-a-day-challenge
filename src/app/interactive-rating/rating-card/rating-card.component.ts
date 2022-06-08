import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss']
})
export class RatingCardComponent implements OnInit {
  selectedId!: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  addActiveClass(event: any) {
    const buttons = document.querySelectorAll(".rating-icon-container");
    buttons.forEach((button) => {
        buttons.forEach((button) => button.classList.remove("active"));
    });
    event.target.classList.add('active');
    this.selectedId = event.target?.textContent;
  }

  submit() {
    this.router.navigate(['/thank-you', this.selectedId])
  }
}
