import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.scss']
})
export class FormatterComponent implements OnInit {

  @Input() public obj: any;

  constructor() { }

  ngOnInit() {
  }

  public getKeys(obj: any): Array<string> {
    return Object.keys(obj);
  }

  public getType(obj: any): string {
      if (Array.isArray(obj)) {
        return 'array';
      } else if (obj == null) {
        return 'null';
      } else {
        return typeof obj;
      }
  }

  

}
