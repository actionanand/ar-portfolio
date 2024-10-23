import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { map } from 'rxjs/operators';

import { TypewriterEffectService } from '../../services/typewriter-effect.service';

@Component({
  selector: 'app-typewriter-effect',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './typewriter-effect.component.html',
  styleUrl: './typewriter-effect.component.scss',
})
export class TypewriterEffectComponent {
  private readonly titles = ['Hello World', 'How are you?', 'What are you up to?'];

  private typewriterServ = inject(TypewriterEffectService);

  typedText$ = this.typewriterServ.getTypewriterEffect(this.titles).pipe(map(text => text));
}
