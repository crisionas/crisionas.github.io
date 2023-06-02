import {Component, OnInit} from '@angular/core';
import {CarouselImage} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  carouselImages: CarouselImage[] = [
    {
      src: 'assets/images/projects/recommender.jpg',
      alt: 'test '
    },
    {
      src: 'assets/images/projects/gan.jpg',
      alt: 'test 2',
      captionTitle: 'Test 2'
    },
    {
      src: 'assets/images/projects/iras.jpeg',
      alt: 'test 3',
      captionTitle: 'Test 3'
    },
    {
      src: 'assets/images/projects/iras.jpeg',
      alt: 'Test2',
      captionTitle: 'Test 4'
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
