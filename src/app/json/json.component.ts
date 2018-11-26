import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit {

  public jsonInput: string;
  public jsonMinifyInput: string;
  public jsonMinifyResult: string;
  public output: any;

  constructor() { }

  ngOnInit() {
  }

  public formatClicked(): void {
    if (this.isJson(this.jsonInput)) {
      this.output = JSON.parse(this.jsonInput);
    }
  }

  public minifyClicked(): void {
    this.jsonMinifyResult = JSON.stringify(JSON.parse(this.jsonMinifyInput));
  }

  private isJson(value: string): boolean {
    try {
      JSON.parse(value);
    } catch(e) {
      return false;
    }
    return true;
  }
}
