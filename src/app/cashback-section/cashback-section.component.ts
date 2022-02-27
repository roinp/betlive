import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashback-section',
  templateUrl: './cashback-section.component.html',
  styleUrls: ['./cashback-section.component.css']
})
export class CashbackSectionComponent implements OnInit {

  
  ngOnInit(): void {
  }
  positions = [
    '-330px',
    '-100px',
    'calc(50% - 110px)',
    'calc(50% + 300px)',
    '1000px',
  ]
}
