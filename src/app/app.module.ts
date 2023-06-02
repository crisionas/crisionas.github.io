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
import {PortofolioPageComponent} from './portofolio/portofolio-page/portofolio-page.component';
import {FormsModule} from "@angular/forms";
import { ProjectComponent } from './shared/components/project/project.component';

const routes: Routes = [
  {path: '', component: AboutmeComponent},
  {path: 'portofolio', component: PortofolioPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    NavbarComponent,
    FooterComponent,
    PortofolioPageComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    MatIconModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
