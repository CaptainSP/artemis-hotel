import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(private activatedRoute:ActivatedRoute, public authService:AuthService, public observer:BreakpointObserver) { }

  public isPageActive(page:string) : boolean {
    if (page === 'home') {
      return this.activatedRoute.snapshot.url.length == 0;
    }
    return this.activatedRoute.snapshot.url.length > 0 && this.activatedRoute.snapshot.url[0].path === page;
  }

  public hasPermission() {
    return this.authService.role === 'Full Access';
  }
  public isMobile() {
    return this.observer.isMatched('(max-width: 599px)');
  }

}
