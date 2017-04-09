import { Component, Input } from '@angular/core';
import { Unicorn } from '../definitions';

@Component({
  selector: 'unicorn',
  templateUrl: './unicorn.component.html',
  styleUrls: ['../app.component.sass']
})
export class UnicornComponent {

  @Input("unicorn") unicorn;

  constructor() { }

}
