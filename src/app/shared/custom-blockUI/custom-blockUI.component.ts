import { Component, OnInit } from '@angular/core';
import { CustomBlockUIService } from '../../core/services/custom-blockUI.service';

@Component({
  selector: 'app-custom-blockUI',
  templateUrl: './custom-blockUI.component.html',
  styleUrls: ['./custom-blockUI.component.css'],
})
export class CustomBlockUIComponent implements OnInit {
  constructor(public customBlockUIService: CustomBlockUIService) {}

  ngOnInit(): void {}
}
