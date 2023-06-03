import {Component} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-one-directory-sync',
  templateUrl: './one-directory-sync.component.html',
  styleUrls: ['./one-directory-sync.component.scss']
})
export class OneDirectorySyncComponent {
  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/ods/diagram.png',
      captionText:'Structure',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/ods/main.png',
      captionText:'Main Page',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/ods/addEdit.png',
      captionText:'Add/Edit Page',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/ods/addEditOption.png',
      captionText:'Options Page',
      type: CarouselItemType.image
    }
  ];
}
