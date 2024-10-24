import { Component, OnInit } from '@angular/core';

import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [CdkDrag, NgStyle],
  templateUrl: './draggable.component.html',
  styleUrl: './draggable.component.scss',
})
export class DraggableComponent implements OnInit {
  readonly dragTip = 'Drag the skill inside the container';

  skills = [
    'angular',
    'javascript',
    'css',
    'react',
    'web design',
    'nodeJS',
    'python',
    'c#',
    'public speaking',
    'game design',
    'html',
    'unity',
    'illustration',
    '2',
    '4',
    '7',
  ];

  skillsPills: { skill: string; deg: number; x: number; y: number }[] = [];

  ngOnInit(): void {
    this.skills = this.shuffleArrayEls(this.skills);
    this.getRandomDirection(this.skills);

    console.log('skillsPills', this.skillsPills);
  }

  shuffleArrayEls = (skills: string[]) => {
    return skills
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
  };

  getRandomDirection(skills: string[]) {
    let deg = 0;
    let x = 100;
    let y = 100;

    skills.forEach((skill, i) => {
      deg = Math.floor(Math.random() * 30) - 15;
      x = i * (90 / (this.skills.length - 1)); // 90 is the total width of the container (100 - 10)
      y = ((i + 1) % 3) * 40; // 40*2 is the height of the container (100 - 20)

      this.skillsPills.push({ skill, deg, x, y });
    });
  }
}
