import { Component, OnInit } from '@angular/core';
import { FAQItem } from '../FAQItem';

@Component({
  selector: 'app-footer-faq',
  templateUrl: './footer-faq.component.html',
  styleUrls: ['./footer-faq.component.css']
})
export class FooterFaqComponent implements OnInit {
  items: Array<FAQItem> = [
    {
      question: 'რა არის EGT FREESPINS?',
      answer: 'EGT Freespins არის ბეთლაივის ახალი ფუნქია სლოტებში. პირველად მსოფლიოშ, მოთამაშეები' +
            'რომლებიც EGT სლოტებში დაატრიელებენ მინიმუმ 20% - ს ბეთლაივისგან მიიღებენ 20' +
            'უფასო დატრიალებას EGT-ს სლოტზე 5 Burning Hot',
            show: false
    },
    {
      question: 'როდის იწყება აქცია?',
      answer: 'EGT Freespins არის ბეთლაივის ახალი ფუნქია სლოტებში. პირველად მსოფლიოშ, მოთამაშეები' +
            'რომლებიც EGT სლოტებში დაატრიელებენ მინიმუმ 20% - ს ბეთლაივისგან მიიღებენ 20' +
            'უფასო დატრიალებას EGT-ს სლოტზე 5 Burning Hot',
            show: false
    },
    {
      question: 'ვის შეუძლია აქციაში მონაწილების მიღეაბ?',
      answer: 'EGT Freespins არის ბეთლაივის ახალი ფუნქია სლოტებში. პირველად მსოფლიოშ, მოთამაშეები' +
            'რომლებიც EGT სლოტებში დაატრიელებენ მინიმუმ 20% - ს ბეთლაივისგან მიიღებენ 20' +
            'უფასო დატრიალებას EGT-ს სლოტზე 5 Burning Hot',
            show: false
    },
    {
      question: 'რომელი თამაშები მონაწილების აქციაში?',
      answer: 'EGT Freespins არის ბეთლაივის ახალი ფუნქია სლოტებში. პირველად მსოფლიოშ, მოთამაშეები' +
            'რომლებიც EGT სლოტებში დაატრიელებენ მინიმუმ 20% - ს ბეთლაივისგან მიიღებენ 20' +
            'უფასო დატრიალებას EGT-ს სლოტზე 5 Burning Hot',
            show: false
    },
    {
      question: 'როდის დამერიცხება ფრისპინები?',
      answer: 'EGT Freespins არის ბეთლაივის ახალი ფუნქია სლოტებში. პირველად მსოფლიოშ, მოთამაშეები' +
            'რომლებიც EGT სლოტებში დაატრიელებენ მინიმუმ 20% - ს ბეთლაივისგან მიიღებენ 20' +
            'უფასო დატრიალებას EGT-ს სლოტზე 5 Burning Hot',
            show: false
    },
    {
      question: 'დამატებითი წესები და პირობები',
      answer: 'EGT Freespins არის ბეთლაივის ახალი ფუნქია სლოტებში. პირველად მსოფლიოშ, მოთამაშეები' +
            'რომლებიც EGT სლოტებში დაატრიელებენ მინიმუმ 20% - ს ბეთლაივისგან მიიღებენ 20' +
            'უფასო დატრიალებას EGT-ს სლოტზე 5 Burning Hot',
            show: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
