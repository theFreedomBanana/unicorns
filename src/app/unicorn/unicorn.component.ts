import { Component, Input } from '@angular/core';
import { Unicorn } from '../definitions';

@Component({
  selector: 'unicorn',
  templateUrl: './unicorn.component.html',
  styleUrls: ['./unicorn.component.sass']
})
export class UnicornComponent {

  @Input("unicorn") unicorn;

  constructor() { }

}
