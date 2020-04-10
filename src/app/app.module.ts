import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from '../app/my-nav/my-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GalleryComponent } from './gallery/gallery.component';
import { OnlineservicesComponent } from './onlineservices/onlineservices.component';
import { NewsandeventsComponent } from './newsandevents/newsandevents.component';
import { EmploymentComponent } from './employment/employment.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StudentlifeandlearningComponent } from './studentlifeandlearning/studentlifeandlearning.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProspectusComponent } from './prospectus/prospectus.component';
import { HomeComponent } from './home/home.component';
import { DemoMaterialModule } from './material.modules';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// @fortawesome/fontawesome-free-webfonts


@NgModule({
  declarations: [
    AppComponent, MyNavComponent, GalleryComponent, OnlineservicesComponent, NewsandeventsComponent, EmploymentComponent, ContactusComponent, StudentlifeandlearningComponent, ProspectusComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    DemoMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
