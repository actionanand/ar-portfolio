import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // @HostBinding('class')
  // currentTheme: 'theme-light' | 'theme-dark' = 'theme-light';

  title = 'AR Portfolio';

  // onThemeChanged() {
  //   this.isDarkMode = !this.isDarkMode;
  //   console.log(this.isDarkMode);
  //   if (this.isDarkMode) {
  //     this.currentTheme = 'theme-dark';
  //   } else {
  //     this.currentTheme = 'theme-light';
  //   }
  // }

  // onThemeChanged() {
  //   this.isDarkMode = !this.isDarkMode;

  //   document.body.classList.remove('theme-light', 'theme-dark');

  //   if (this.isDarkMode) {
  //     document.body.classList.add('theme-dark');
  //   } else {
  //     document.body.classList.add('theme-light');
  //   }
  // }
}
