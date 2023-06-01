import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutmeComponent} from './aboutme/aboutme/aboutme.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import {MatIconModule} from "@angular/material/icon";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
