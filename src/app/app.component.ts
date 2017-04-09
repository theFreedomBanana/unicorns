import { 
  OnInit,
  Component
} from '@angular/core';
import { Unicorn } from './definitions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {

  unicorns: Unicorn[] = [
    {
      name: "Foo",
      gender: "male",
      color: "#ce1a4a"
    },
    {
      name: "Bar",
      gender: "female",
      color: "#719ECE"
    },
    {
      name: "Baz",
      gender: "female",
      color: "#cece4b"
    }
  ]

  newUnicorn: Unicorn = {};

  constructor() {
  }

  ngOnInit() {}

  createUnicorn(color: string): void {
    this.newUnicorn["color"] = color;
    console.log("newUnicorn: ", this.newUnicorn);
    this.unicorns.push(this.newUnicorn);
    this.newUnicorn = {};
  }

}
