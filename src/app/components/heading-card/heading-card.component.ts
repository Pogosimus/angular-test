import { Component, OnInit } from '@angular/core';
import { operations } from 'src/app/data/operations';

@Component({
  selector: 'app-heading-card',
  templateUrl: './heading-card.component.html',
})
export class HeadingCardComponent implements OnInit {
  totalTransactions: number = operations.length;

  constructor() {}

  ngOnInit(): void {}
}
