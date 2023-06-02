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
      alt: 'test ',
      captionTitle: 'Test 1',
      captionText: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      src: 'assets/images/projects/gan.jpg',
      alt: 'test 2',
      captionTitle: 'Test 2',
      captionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      src: 'assets/images/projects/iras.jpeg',
      alt: 'test 3',
      captionTitle: 'Test 3',
      captionText: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      src: 'assets/images/projects/iras.jpeg',
      alt: 'Test2',
      captionTitle: 'Test 4',
      captionText: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
