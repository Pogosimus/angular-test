import { Injectable } from '@angular/core';
import { IOperation } from 'src/app/models/operation';
import { operations } from 'src/app/data/operations';

@Injectable({
  providedIn: 'root',
})
export class CountingService {
  operationsTotal = operations;
  constructor() {}
  getOperationTypeCount(str: string): number {
    console.log(typeof str);
    return this.operationsTotal.filter((x) => x.type == str).length;
  }
}
