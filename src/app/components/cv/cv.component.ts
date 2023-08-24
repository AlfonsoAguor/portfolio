import { Component, HostListener } from '@angular/core';
import { Estudio } from '../../models/estudios';
import { EstudioService } from '../../services/estudio.service';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';
import { Experiencia } from '../../models/experiencia';
import { ExperienciaService } from '../../services/experiencia.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [EstudioService, CursoService, ExperienciaService]
})
export class CvComponent {
  public isSmallScreen: boolean;
  public estudios: Estudio[] = [];
  public cursos: Curso[] = [];
  public exes: Experiencia[] = [];
  public url: string;
  public tituloOpenIndex: number[] = [];


  constructor(
    private _estudioService: EstudioService,
    private _cursoService: CursoService,
    private _experienciaService: ExperienciaService
  ){
    this.isSmallScreen = false;
    this.url = Global.url;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.getEses();
    this.getCursos();
    this.getExes();
    this.checkScreenSize();
  }

  getEses() {
    this._estudioService.getEses().subscribe(
      response => {
        this.estudios = response.eses;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getCursos() {
    this._cursoService.getCursos().subscribe(
      response => {
        this.cursos = response.cus;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getExes() {
    this._experienciaService.getExes().subscribe(
      response => {
        this.exes = response.exes;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getMonthName(month: number): string {
    const adjustedMonth = month - 1;
    const date = new Date(0, adjustedMonth);
    return date.toLocaleString('default', { month: 'long' });
  }

  toggleTitulo(index: number) {
    const indexFound = this.tituloOpenIndex.indexOf(index);
    if (indexFound !== -1) {
      this.tituloOpenIndex.splice(indexFound, 1);
    } else {
      this.tituloOpenIndex.push(index);
    }
  }


  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 576;
  }
}
