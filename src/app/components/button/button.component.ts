import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() width: string;

  constructor() {}

  ngOnInit(): void {}
}
