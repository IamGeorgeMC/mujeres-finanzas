import { Component, OnInit, Input,  ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  
  @Input() colorMenu = '';
  @Input() subMenu = false;
  navbarOpen = false;
  navbarTowOpen = false;
  closeResult = '';

  constructor(private router: Router,private location: Location, private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  open(content) {

    this.modalService.open(content, {centered: true, size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
