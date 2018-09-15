import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <input [(ngModel)]="name" type="text" value="Abhijeet"/>
    {{name}}
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name: String;
  constructor() { }

  ngOnInit() {
  }

}
