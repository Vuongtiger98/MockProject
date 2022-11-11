import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  selectedSlide: number = 1;
  constructor() {}
  ngOnInit(): void {}

  nextSlide() {
    if (this.selectedSlide == 3) {
      this.selectedSlide = 1;
    } else {
      this.selectedSlide += 1;
    }
  }
  previousSlide() {
    if (this.selectedSlide == 1) {
      this.selectedSlide = 3;
    } else {
      this.selectedSlide -= 1;
    }
  }
}
