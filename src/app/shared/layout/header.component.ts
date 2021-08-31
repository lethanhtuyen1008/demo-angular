import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../core';
import * as $ from 'jquery';
  
@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService,  ) {}
  currentUser: User;
  classOpen = 'show';
  classClose = 'hidden';
  urlActive = '';

  ngOnInit() {
    this.userService.currentUser.subscribe((userData) => {
      this.currentUser = userData;
    });

    this.urlActive = (window.location.href.split('/')[3]);
    
    if (localStorage.getItem('isOpen') === 'true') {
      $('.navigation').addClass('active');
      this.classOpen = 'hidden';
      this.classClose = 'show';
      $('#menu').addClass('active-menu');
      $('#menu').removeClass('close-menu');
    }
  }

  onOpenMenu() {
    $('.navigation').addClass('active');
    this.classOpen = 'hidden';
    this.classClose = 'show';
    $('#menu').addClass('active-menu');
    $('#menu').removeClass('close-menu');
    localStorage.setItem('isOpen', 'true');
  }

  onCloseMenu() {
    $('.navigation').removeClass('active');
    $('#menu').removeClass('active-menu');
    $('#menu').addClass('close-menu');
    this.classOpen = 'show';
    this.classClose = 'hidden';
    localStorage.setItem('isOpen', 'false');
  }
}
