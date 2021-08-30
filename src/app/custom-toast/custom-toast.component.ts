import { Component, OnInit } from '@angular/core';
import { CustomToastService } from '../custom-toast.service';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.css']
})
export class CustomToastComponent implements OnInit {

 constructor(public messageService: CustomToastService) {}

  ngOnInit(): void {
  }

}
