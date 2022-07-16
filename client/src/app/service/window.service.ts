import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  constructor(private router: Router) {}

  openNew(screen: string) {
    window.open(screen);
  }

  openNext(screen: string) {
    this.router.navigate([screen]);
  }
}
