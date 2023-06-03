import {Component} from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {

  projects = [
    {title: 'One Directory Sync', image: 'assets/images/projects/twitteranalysis.jpg', projectNameRoute: "one-directory-sync"},
    {title: 'Notification Service', image: 'assets/images/projects/notificationService/overview.png', projectNameRoute: "notification-service"},
    {title: 'One Directory Sync', image: 'assets/images/projects/ods/overview.png', projectNameRoute: "one-directory-sync"},
    {title: 'Directory Sync', image: 'assets/images/projects/directorySync/directory.png', projectNameRoute: "directory-sync"},
    {title: 'Migration Tool', image: 'assets/images/projects/migrationTool/overview.png', projectNameRoute: "migration-tool"},
    {title: 'SecureVote', image: 'assets/images/projects/votingSystem/blockchain-voting.png', projectNameRoute: "voting-system"}
  ];
}
