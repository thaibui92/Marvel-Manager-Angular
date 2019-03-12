import { Component, OnInit } from '@angular/core';
@Component({
  template: '',
})
export class BaseComponent implements OnInit {
  model:any;
  errorMess: {};
  constructor() { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
  }

  goBack(): void {
    window.history.back();
  }
}
