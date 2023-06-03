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
    {title: 'Migration Tool', image: 'assets/images/projects/migrationTool/overview.png', projectNameRoute: "migration-tool"},
    {title: 'SecureVote: Blockchain-Powered Voting System', image: 'assets/images/projects/votingSystem/blockchain-voting.png', projectNameRoute: "voting-system"},
  ];
}
