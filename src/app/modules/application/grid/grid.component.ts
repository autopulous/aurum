import {Component} from '@angular/core';

@Component({
  selector: 'au-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  host: {'au': 'block centered'} // assign block and centered au style attributes
  // host: {'block': '', 'centered': ''} // when block and centered are activated via <html au-styles="block centered">
})
export class GridComponent {}
