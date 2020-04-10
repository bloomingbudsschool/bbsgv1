import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { ProspectusComponent } from './prospectus/prospectus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { EmploymentComponent } from './employment/employment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prospectus', component: ProspectusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'employment', component: EmploymentComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
