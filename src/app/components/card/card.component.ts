import { Component, Input, OnInit } from '@angular/core';
import { CountingService } from '../../services/counting.service';
import { operations } from 'src/app/data/operations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() text: string;
  @Input() operationType: string;
  @Input() operations = operations;
  @Input() operationCount: number = 0;

  constructor(private countingService: CountingService) {}

  ngOnInit() {
    this.operationCount = this.countingService.getOperationTypeCount(
      this.operationType
    );
  }
}
