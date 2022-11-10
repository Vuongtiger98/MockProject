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
    this.selectedSlide += 1;
  }
  previousSlide() {
    this.selectedSlide -= 1;
  }
}
