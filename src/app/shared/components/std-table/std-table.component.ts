import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../../model/student';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  @Input()
  stdDetails: Array<Istudent> = []


  constructor() { }

  ngOnInit(): void {
  }

}
