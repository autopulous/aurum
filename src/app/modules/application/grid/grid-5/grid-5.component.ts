import {Component} from '@angular/core';

@Component({
  selector: 'grid-5',
  templateUrl: './grid-5.component.html',
  styleUrls: ['./grid-5.component.scss'],
  host: {'au': 'block centered margin-bottom-10'} // assign block and centered au style attributes
  // host: {'block': '', 'centered': ''} // when block and centered are activated via <html au-styles="block centered">
})
export class Grid5Component {}
