import { Component, OnInit } from '@angular/core';
import {CarouselItem, CarouselItemType} from "../../shared/components/carousel/carousel.component";

@Component({
  selector: 'app-migration-tool',
  templateUrl: './migration-tool.component.html',
  styleUrls: ['./migration-tool.component.scss']
})
export class MigrationToolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  carouselImages: CarouselItem[] = [
    {
      src: 'assets/images/projects/migrationTool/overview1.png',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/migrationTool/initial.png',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/migrationTool/choose-db.png',
      type: CarouselItemType.image
    },    {
      src: 'assets/images/projects/migrationTool/migration-in-progress.png',
      type: CarouselItemType.image
    },
    {
      src: 'assets/images/projects/migrationTool/db-configuration.png',
      type: CarouselItemType.image
    },
  ];
}
