import {Component, HostListener} from '@angular/core';
import {faFacebookF, faLinkedinIn, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;
  faFacebook = faFacebookF;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  isMenuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    const menuElement = document.querySelector('.menu1');

    if (this.isMenuOpen && !menuElement!.contains(clickedElement)) {
      this.closeMenu();
    } else {
      this.isMenuOpen = true;
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
