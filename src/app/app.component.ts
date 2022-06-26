import { Component } from '@angular/core';
import { arrayMenu } from '../assets/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AbsTransportes';
  menuList = arrayMenu;
}
