import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
    Wlcome {{name}}
    </h2>
  `,
  styles: [`
    div {
      color:red;
    }
  `]
})
export class TestComponent implements OnInit {
  public name ="vishwas";
  constructor() { }


  ngOnInit(): void {
  }

}
