import {Component} from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {

  projects = [
    {title: 'Twitter Analysis', image: 'assets/images/projects/twitteranalysis.jpg', projectNameRoute: "test"},
    {title: 'Project 2', image: 'assets/images/projects/twitteranalysis.jpg', projectNameRoute: "test"},
    {title: 'Project 3', image: 'assets/images/projects/twitteranalysis.jpg', projectNameRoute: "test"},
    {title: 'Project 4', image: 'assets/images/projects/twitteranalysis.jpg', projectNameRoute: "test"},
  ];
}
