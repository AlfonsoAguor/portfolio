import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public title:string;
  public subtitle:string;
  public mail:string;
  public phone: number;
  public location:string;
  public licenses:string;
  
  public isSmallScreen: boolean;


  constructor(){
    this.title="Alfonso Agujetas Ortiz";
    this.subtitle="Técnico informático";
    this.mail="alfonsoaguor@gmail.com";
    this.phone = 600332250;
    this.location = "Toledo";
    this.licenses = "B1";
    this.isSmallScreen = false;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 576;
  }
}
