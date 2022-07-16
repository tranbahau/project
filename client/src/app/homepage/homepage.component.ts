import {Component, OnInit,} from '@angular/core';
import {WindowService,} from '../service/window.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss',],
})
export class HomepageComponent implements OnInit {
  openState = false;
  constructor(private windowService: WindowService) {}

  ngOnInit(): void {
    //
  }

  open(ref: string) {
    this.windowService.openNew(ref);
  }
}
