import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import {MatIconModule} from "@angular/material/icon";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from "@angular/router";
import {PortfolioPageComponent} from './portofolio/portfolio-page/portfolio-page.component';
import {FormsModule} from "@angular/forms";
import {ProjectComponent} from './shared/components/project/project.component';
import {TestComponent} from './portofolio/test/test.component';
import {ModalProjectsComponent} from './shared/components/modal-projects/modal-projects.component';

const routes: Routes = [
  {path: '', component: AboutmeComponent},
  {path: 'portfolio', component: PortfolioPageComponent},
  {path: 'portfolio/test', component: TestComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioPageComponent,
    ProjectComponent,
    TestComponent,
    ModalProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    MatIconModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
