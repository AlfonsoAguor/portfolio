import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { AboutComponent } from './components/about/about.component';
import { CvComponent } from './components/cv/cv.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  {path: '', component : AboutComponent},
  {path: 'sobre-mi', component : AboutComponent},
  {path: 'cv', component : CvComponent},
  {path: 'habilidades', component : HabilitiesComponent},
  {path: 'proyectos', component : ProjectsComponent},

  {path: '**', component : AboutComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);