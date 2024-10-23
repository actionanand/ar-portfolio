import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [NgFor],
  templateUrl: './draggable.component.html',
  styleUrl: './draggable.component.scss',
})
export class DraggableComponent implements OnInit {
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
  ];
  skillPositions: string[][] = [];
  currentlyDragging: number | undefined;
  mouseX: number | undefined;
  mouseY: number | undefined;

  ngOnInit() {
    for (let i = 0; i < this.skills.length; i++) {
      const pos: string[] = [
        i * (100 / (this.skills.length - 1)) + '%',
        ((i + 1) % 3) * 50 + '%',
        this.getRandomRotation(),
      ];
      this.skillPositions.push(pos);
    }
  }

  getRandomRotation() {
    const randomVal = Math.floor(Math.random() * 30) - 15;
    return `rotate(${randomVal}deg)`;
  }

  startDragging(i: number) {
    this.currentlyDragging = i;
  }

  mouseMove(e: MouseEvent) {
    if (this.currentlyDragging == undefined) {
      return;
    }
    this.skillPositions[this.currentlyDragging][0] = e.pageX - 100 + 'px';
    this.skillPositions[this.currentlyDragging][1] = e.pageY - 40 + 'px';
  }

  touchMove(e: Event) {
    if (this.currentlyDragging == undefined) {
      return;
    }
    const firstTouch = (e as TouchEvent).touches[0];
    if (firstTouch) {
      this.mouseMove({ pageX: firstTouch.pageX, pageY: firstTouch.pageY } as MouseEvent);
    }
  }

  stopDragging() {
    if (this.currentlyDragging) {
      this.skillPositions[this.currentlyDragging][2] = this.getRandomRotation();
    }
    this.currentlyDragging = undefined;
  }
}
