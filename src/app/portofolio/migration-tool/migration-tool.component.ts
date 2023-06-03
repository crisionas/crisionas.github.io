import { Component, OnInit } from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-migration-tool',
  templateUrl: './migration-tool.component.html',
  styleUrls: ['./migration-tool.component.scss']
})
export class MigrationToolComponent implements OnInit {

  carouselWidth='760';
  carouselHeight='415';
  constructor() { }

  ngOnInit(): void {
  }



  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/migrationTool/overview.png',
      alt: 'Web APP',
      captionText:'Web Version',
      type: CarouselItemType.image
    }
  ];
}
