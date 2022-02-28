import { Component, OnInit } from '@angular/core';
import { SliderBoxData } from '../SliderBox';

@Component({
  selector: 'app-cashback-section',
  templateUrl: './cashback-section.component.html',
  styleUrls: ['./cashback-section.component.css']
})
export class CashbackSectionComponent implements OnInit {
  boxes: Array<SliderBoxData> = [
    {
      date: '1 მაისი',
      percent: 14,
      points: 35,
      position: '-37%',
      scale: 0.8,
      transition: true,
    },
    {
      date: '2 მაისი',
      percent: 14,
      points: 35,
      position: '-8%',
      scale: 0.8,
      transition: true,
    },
    {
      date: '3 მაისი',
      percent: 14,
      points: 135,
      position: '37%',
      scale: 1,
      transition: true,
    },
    {
      date: '4 მაისი',
      percent: 14,
      points: 35,
      position: '84%',
      scale: 0.8,
      transition: true,
    },
    {
      date: '5 მაისი',
      percent: 14,
      points: 35,
      position: '1000px',
      scale: 0.8,
      transition: true,
    },
  ]

  ngOnInit(): void {
  }

  move(dir) {
    if(dir === 'right') {
      this.boxes.find(box => box.position === '1000px').transition = false;
      let firstPosition = this.boxes[0].position;
      for(let i = 0; i < this.boxes.length - 1; i++) {
        this.boxes[i].position = this.boxes[i + 1].position;
      }
      this.boxes[this.boxes.length - 1].position = firstPosition;
      requestAnimationFrame(() => {
        this.boxes.find(box => box.position === '-37%').transition = true;
      })
    } else {
      this.boxes.find(box => box.position === '-37%').transition = false;
      let lastPosition = this.boxes[this.boxes.length - 1].position;
      for(let i = this.boxes.length - 1; i > 0; i--) {
        this.boxes[i].position = this.boxes[i - 1].position;
      }
      this.boxes[0].position = lastPosition;
      requestAnimationFrame(() => {
        this.boxes.find(box => box.position === '1000px').transition = true;
      })
    }


    this.boxes.forEach(box => {
      if(box.position === '37%') {
        box.scale = 1;
      } else {
        box.scale = 0.8;
      }
    })
  }

}
