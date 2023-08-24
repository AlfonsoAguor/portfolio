import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CvComponent } from './components/cv/cv.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'cv', component: CvComponent },
  { path: 'habilidades', component: HabilitiesComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CvComponent,
    HabilitiesComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
