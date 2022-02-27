import { Component, Input, OnInit } from '@angular/core';
import { FAQItem } from '../FAQItem';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css']
})
export class FaqItemComponent implements OnInit {
  @Input() item: FAQItem;

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() {
    this.item.show = !this.item.show;
  }

}
