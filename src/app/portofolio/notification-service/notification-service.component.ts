import {Component} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-notification-service',
  templateUrl: './notification-service.component.html',
  styleUrls: ['./notification-service.component.scss']
})
export class NotificationServiceComponent {
  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/notificationService/diagram.png',
      captionText: 'System architecture',
      type: CarouselItemType.image
    }
  ];

}
