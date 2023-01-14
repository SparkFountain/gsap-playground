import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  array!: number[];

  constructor() {}

  ngOnInit(): void {
    this.array = new Array(25);

    gsap.to('.box', {
      scale: 0.1,
      y: 60,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      delay: 1,
      stagger: {
        amount: 1.5,
        grid: 'auto',
        from: 'center',
      },
      duration: 1
    });
  }
}
