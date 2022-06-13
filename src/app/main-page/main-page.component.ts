import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }
  openModal() {
    document.querySelector('.mobile-nav')!.classList.add('show');
    const overlay = document.querySelector('.overlay') as HTMLElement;
    if (overlay) {
      overlay!.style.display = 'block';
    }

    document.querySelector('body')!.classList.add('lock');
  }

  closeModal() {
    document.querySelector('.mobile-nav')!.classList.remove('show');
    const modal = document.querySelector('.overlay') as HTMLElement;
    if (modal) {
      modal.style.display = 'none'
    }
    document.querySelector('body')!.classList.remove('lock');
  }
}
