import {Component, OnInit} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/recommender.jpg',
      alt: 'test ',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/gan.jpg',
      alt: 'test 2',
      captionTitle: 'Test 2',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/iras.jpeg',
      alt: 'test 3',
      captionTitle: 'Test 3',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/iras.jpeg',
      alt: 'Test2',
      captionTitle: 'Test 4',
      type: CarouselItemType.image
    },
    {
      src: 'https://www.youtube.com/embed/c1ZLS-dnw94',
      alt: 'Test2',
      captionTitle: 'Test 4',
      type: CarouselItemType.video
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
