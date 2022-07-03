import { Component } from '@angular/core';
import { SystemConstant } from 'src/app/const/system-const';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = SystemConstant.MAIN_TITLE;
}
