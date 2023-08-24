import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isSmallScreen: boolean;
  public isMenuOpen: boolean;

  constructor(){
    this.isSmallScreen = false;
    this.isMenuOpen = false;
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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
