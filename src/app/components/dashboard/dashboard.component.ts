import { Component } from '@angular/core';

import { TypewriterEffectComponent } from '../fancies/typewriter-effect/typewriter-effect.component';
import { DraggableComponent } from '../fancies/draggable/draggable.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TypewriterEffectComponent, DraggableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
