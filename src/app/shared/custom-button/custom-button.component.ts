import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent {
  ngOnInit(): void {}
  @Input() label: string;
  @Input() class: any;
}
