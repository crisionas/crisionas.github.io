import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  @Input() images: CarouselImage[] = [];
}

export interface CarouselImage {
  src: string;
  alt: string;
  captionTitle: string;
  captionText: string;
}
