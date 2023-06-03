import {Component} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-directory-sync',
  templateUrl: './directory-sync.component.html',
  styleUrls: ['./directory-sync.component.scss']
})
export class DirectorySyncComponent {

  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/directorySync/synchronization.png',
      captionText: 'Directory Sync',
      type: CarouselItemType.image
    }
  ];
}
