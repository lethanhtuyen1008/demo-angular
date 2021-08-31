import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService, private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.userService.populate();
    this.primengConfig.ripple = true;
  }
}
