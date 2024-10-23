import { Component } from '@angular/core';

import { TypewriterEffectComponent } from '../typewriter-effect/typewriter-effect.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TypewriterEffectComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
