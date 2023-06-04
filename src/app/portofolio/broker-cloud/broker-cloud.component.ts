import {Component} from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-broker-cloud',
  templateUrl: './broker-cloud.component.html',
  styleUrls: ['./broker-cloud.component.scss']
})
export class BrokerCloudComponent {
  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/brokerCloud/diagram.png',
      captionText:'System Architecture Diagram',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/brokerCloud/dynamicForm.png',
      captionText:'Example of Dynamic Form Rendering',
      type: CarouselItemType.image
    }
  ];
}
