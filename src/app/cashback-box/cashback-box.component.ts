import { Component, Input, OnInit } from '@angular/core';
import { SliderBoxData } from '../SliderBox';

@Component({
  selector: 'app-cashback-box',
  templateUrl: './cashback-box.component.html',
  styleUrls: ['./cashback-box.component.css']
})
export class CashbackBoxComponent implements OnInit {
  // left='calc(50% - 110px)';
  @Input() data: SliderBoxData;

  constructor() {

  }

  ngOnInit(): void {
  }

}
