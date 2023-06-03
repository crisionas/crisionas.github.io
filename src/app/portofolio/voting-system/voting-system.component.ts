import { Component, OnInit } from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-voting-system',
  templateUrl: './voting-system.component.html',
  styleUrls: ['./voting-system.component.scss']
})
export class VotingSystemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  carouselImages: CarouselItem[] = [
    {
      src: 'https://www.youtube.com/embed/bGDrMOk5eaw?controls=0&vq=hd720',
      alt: 'Web APP',
      captionText:'Web Version',
      type: CarouselItemType.video
    },
    {
      src: 'https://www.youtube.com/embed/TgTjTtFZrF0?controls=0&vq=hd720',
      alt: 'Xamarin APP',
      captionText:'Mobile Version',
      type: CarouselItemType.video
    },
    {
      src: 'assets/images/projects/votingSystem/diagram.png',
      alt: 'Xamarin APP',
      captionText:'Diagram',
      type: CarouselItemType.image
    }
  ];
}
