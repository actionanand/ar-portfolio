import { Component } from '@angular/core';

import { TypewriterEffectComponent } from '../fancies/typewriter-effect/typewriter-effect.component';
import { DraggableComponent } from '../fancies/draggable/draggable.component';
import { SocialMediaIconsWrapComponent } from '../fancies/social-media-icons-wrap/social-media-icons-wrap.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TypewriterEffectComponent, DraggableComponent, SocialMediaIconsWrapComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
