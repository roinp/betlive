import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashback-box',
  templateUrl: './cashback-box.component.html',
  styleUrls: ['./cashback-box.component.css']
})
export class CashbackBoxComponent implements OnInit {
  // left='calc(50% - 110px)';
  @Input() left: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
