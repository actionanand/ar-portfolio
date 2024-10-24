import { AfterViewInit, Component, Inject, inject, Renderer2, ViewChild } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT, NgIf } from '@angular/common';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
// import { delay, filter } from 'rxjs/operators';
// import { NavigationEnd } from '@angular/router';
import { Router, RouterOutlet } from '@angular/router';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatDividerModule,
    MatSlideToggle,
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isMobile = true;
  isDarkMode = false;

  readonly myProfile = {
    title: 'Portfolio Of Anand',
    name: 'Anand N S',
    designation: 'Senior Software Engineer',
  };

  private bPtObserver = inject(BreakpointObserver);
  private renderer = inject(Renderer2);
  private router = inject(Router);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onThemeChanged() {
    const themes = ['theme-light', 'theme-dark'];
    const documentBody = this.document.body;

    this.isDarkMode = !this.isDarkMode;

    // this.document.body.classList.remove('theme-light', 'theme-dark');
    // document.body.classList.remove('theme-light', 'theme-dark');

    themes.forEach(theme => {
      this.renderer.removeClass(documentBody, theme);
    });

    if (this.isDarkMode) {
      this.renderer.addClass(documentBody, themes[1]);
    } else {
      this.renderer.addClass(documentBody, themes[0]);
    }
  }

  ngAfterViewInit() {
    // this.sidenav.mode = 'side';

    this.bPtObserver.observe(['(max-width: 850px)']).subscribe({
      next: res => {
        console.log(res);

        if (res.matches) {
          // this.isMobile = true;
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          // this.isMobile = false;
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      },
    });

    // this.observer
    //   .observe(['(max-width: 850px)'])
    //   .pipe(delay(1))
    //   .subscribe((res: any) => {
    //     if (res.matches) {
    //       this.sidenav.mode = 'over';
    //       this.sidenav.close();
    //     } else {
    //       this.sidenav.mode = 'side';
    //       this.sidenav.open();
    //     }
    //   });

    // this.router.events
    //   .pipe(
    //     filter((e) => e instanceof NavigationEnd)
    //   )
    //   .subscribe(() => {
    //     if (this.sidenav.mode === 'over') {
    //       this.sidenav.close();
    //     }
    //   });
  }
}
