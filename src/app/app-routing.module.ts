import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutmeComponent} from "./aboutme/aboutme.component";
import {PortfolioPageComponent} from "./portofolio/portfolio-page/portfolio-page.component";
import {VotingSystemComponent} from "./portofolio/voting-system/voting-system.component";
import {MigrationToolComponent} from "./portofolio/migration-tool/migration-tool.component";
import {DirectorySyncComponent} from "./portofolio/directory-sync/directory-sync.component";
import {OneDirectorySyncComponent} from "./portofolio/one-directory-sync/one-directory-sync.component";
import {NotificationServiceComponent} from "./portofolio/notification-service/notification-service.component";
import {InsuranceProcessesComponent} from "./portofolio/insurance-processes/insurance-processes.component";

const routes: Routes = [
  {path: '', component: AboutmeComponent},
  {path: 'portfolio', component: PortfolioPageComponent},
  {path: 'portfolio/voting-system', component: VotingSystemComponent},
  {path: 'portfolio/migration-tool', component: MigrationToolComponent},
  {path: 'portfolio/directory-sync', component: DirectorySyncComponent},
  {path: 'portfolio/one-directory-sync', component: OneDirectorySyncComponent},
  {path: 'portfolio/notification-service', component: NotificationServiceComponent},
  {path: 'portfolio/insurance-processes', component: InsuranceProcessesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
