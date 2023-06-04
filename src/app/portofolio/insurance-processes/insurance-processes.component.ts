import { Component } from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-insurance-processes',
  templateUrl: './insurance-processes.component.html',
  styleUrls: ['./insurance-processes.component.scss']
})
export class InsuranceProcessesComponent {
  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/insurance/diagram.png',
      type: CarouselItemType.image
    }
  ];
}
