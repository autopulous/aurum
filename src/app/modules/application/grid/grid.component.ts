import {Component} from '@angular/core';

@Component({
  selector: 'au-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  // assign Aurum style attributes
  // host: {'au': 'p centered'}
  host: {'p': '', 'centered': ''} // must have turned on Aurum centered and p style attribute via <html au-styles="centered p">
})
export class GridComponent {}
