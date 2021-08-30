import { Component, OnInit } from '@angular/core';
import { UserService } from '../core';
import { CustomToastService } from '../core/services/custom-toast.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService, private customToastService: CustomToastService) {}

  isAuthenticated: boolean;

  ngOnInit() {
    this.userService.isAuthenticated.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
  }

  onClick() {
    this.customToastService.openToast({ message: 'open', title: 'Title', type: 'success' });
  }
}
