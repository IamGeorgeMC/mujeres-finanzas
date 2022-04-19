import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() colorMenu = '';
  @Input() subMenu = false;
  navbarOpen = false;
  navbarTowOpen = false;

  constructor(private router: Router,private location: Location) { }

  ngOnInit(): void {
    
  }
 
  toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
  }
  
  toggleNavbarTow(){
      this.navbarTowOpen = !this.navbarTowOpen;
  }

  goBack(): void {
    this.location.back();
  }

}
