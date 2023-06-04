import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2, private router: Router) {
  }

  ngOnInit() {
    const mastHeadHeight = this.elRef.nativeElement.querySelector('.ci-header').offsetHeight;
    this.renderer.setStyle(this.elRef.nativeElement.querySelector('.ci-banner'), 'marginTop', `${mastHeadHeight}px`);
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('#portfolio')) {
          await this.router.navigate(['/portfolio']);
        }
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollOffset >= 10) {
      this.renderer.addClass(this.elRef.nativeElement.querySelector('.ci-header'), 'ci-fixed-header');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement.querySelector('.ci-header'), 'ci-fixed-header');
    }
  }
}
