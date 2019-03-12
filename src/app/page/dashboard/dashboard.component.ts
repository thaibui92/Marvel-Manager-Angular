
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@app/component/base/base.component';
import { Router } from '@angular/router';
import { UtilityService } from '@app/util';
import { Character } from 'app/model';
import { EngineService } from 'app/engine/engine.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  model: Character[] = [];
  error: any;
  limitItems: number = 10;
  total: number = 100;
  constructor(public router: Router, public engine: EngineService, public util: UtilityService) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  initData() {
    this.getDataLazyLoad();
  }
  onScrollDown(){
    this.getDataLazyLoad();
  }

  getDataLazyLoad(){
    const len = this.model.length;
    if(len < this.total){
      const request = { limit: 20, offset: len };
      this.engine.getCharacters(request, true)
        .subscribe(res => {
          if (res) {
            this.model = [...this.model, ...res.data.results];
            this.total = res.data.total;
          }
        }, error => console.log);
    }
  }

  gotoDetail(c: Character): void {
    const link = ['/detail', c.id];
    this.router.navigate(link);
  }

  getLimitedString(str: string, num: number = 100) {
    return str.length > num ? str.substring(0, num - 1) + '...' : str;
  }
}
