import {AfterViewInit, Component, Input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit{

  constructor(private _sanitizer: DomSanitizer) {

  }

  getSafeVideoURL(videoURL: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
  }

  @Input() carouselItems: CarouselItem[] = [];
  @Input() dataInterval: number = 0;

  @Input() height: string = '760';
  @Input() width: string = '415';

  ngAfterViewInit(): void {
    const carouselDiv = document.getElementById("carouselContainer");
    if (carouselDiv) {
      carouselDiv.style.width = this.width + "px";
      carouselDiv.style.height = this.height + "px";
    }
  }
}

export interface CarouselItem {
  src: string;
  alt: string;
  captionTitle?: string;
  captionText?: string;
  type: CarouselItemType;
}

export enum CarouselItemType {
  image,
  video
}
