import { Component } from '@angular/core';
import { Unicorn } from './definitions';
import { mixColors } from './commonFuncs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

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
  display: boolean[] = [];
  parents: {[name: string]: Unicorn} = {
    father: this.unicorns.find(unicorn => unicorn["gender"] == "male"),
    mother: this.unicorns.find(unicorn => unicorn["gender"] == "female")
  };
  babyUnicorn: Unicorn = {};

  constructor() {}

  createUnicorn(color: string): void {
    this.newUnicorn["color"] = color;
    this.unicorns.push(this.newUnicorn);
    this.newUnicorn = {};
  }

  getOneGender(gender: string): Array<Unicorn> {
    return this.unicorns.filter(unicorn => unicorn["gender"] == gender);
  }

  makeBaby() {
    this.babyUnicorn["name"] = this.parents["father"]["name"] + this.parents["mother"]["name"];
    this.babyUnicorn["color"] = mixColors(this.parents["father"]["color"], this.parents["mother"]["color"]);
    this.babyUnicorn["gender"] = ["male", "female"][Math.floor(Math.random() * ["male", "female"].length)];
    this.unicorns.push(this.babyUnicorn);
    this.babyUnicorn = {};
  }

}
