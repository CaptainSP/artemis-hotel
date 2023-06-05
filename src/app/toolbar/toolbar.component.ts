import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    public observer:BreakpointObserver
  ) {}

  @Input() drawer?: MatDrawer;

  public isPageActive(): boolean {
    return (
      this.activatedRoute.snapshot.url.length == 0 ||
      this.activatedRoute.snapshot.url[0].path !== 'login'
    );
  }

  public isLoginActive(): boolean {
    return (
      this.activatedRoute.snapshot.url.length > 0 &&
      this.activatedRoute.snapshot.url[0].path === 'login'
    );
  }

  public getTitle() {
    if (this.activatedRoute.snapshot.url.length == 0) {
      return 'Home';
    } else {
      return this.activatedRoute.snapshot.data['title'];
    }
  }

  public getDescription() {
    return this.activatedRoute.snapshot.data['description'];
  }

  public logout() {
    this.authService.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }

  public toggleDrawer() {
    this.drawer?.toggle();
  }

  public isMobile() {
    return this.observer.observe('(max-width: 599px)');
  }
}
