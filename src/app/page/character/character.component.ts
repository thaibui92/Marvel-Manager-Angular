
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs'
import { map, catchError } from 'rxjs/operators';
import { Character } from 'app/model';
import { EngineService } from 'app/engine/engine.service';
import { UtilityService } from 'app/util/util';
import { BaseComponent } from '@app/component/base/base.component';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterDetailComponent extends BaseComponent implements OnInit {
  model: Character;
  constructor(public engine: EngineService, public route: ActivatedRoute, public util: UtilityService) {
    super();
  }
  ngOnInit(): void {
    super.ngOnInit();
  }

  initData() {

    this.route.params.forEach((params: Params) => {
      const id = params['id'];
      if (id !== undefined) {
        // const character = this.engine.getCharacter(id, true)
        //   .pipe(map((res) => res), catchError(e => of('Error')));
        // const comics = this.engine.getComicsOfCharacter(id, true)
        //   .pipe(map((res) => res), catchError(e => of('Error')));
        // forkJoin([character, comics]).subscribe(results => {
        //   const [character, comics] = results;
        //   if (character !== 'Error') {
        //     this.model = character.data.results[0];
        //     this.model.comics = comics.data.results;
        //   }
        //   else {
        //     console.log('The character does not exist!');
        //     //@Todo: go to page error
        //   }
        // });
        this.engine.getCharacter(id, true)
          .pipe(map((res) => res), catchError(e => of('Error')))
          .subscribe(res => {
            if (res !== 'Error') {
              this.model = res.data.results[0];
            } else {
              console.log('The character does not exist!');//@Todo: go to page error
            }
          });
        this.engine.getComicsOfCharacter(id, true)
          .pipe(map((res) => res), catchError(e => of('Error')))
          .subscribe(res => {
            if (res !== 'Error') {     
              this.model.comics = res.data.results;   
            } else {
              console.log('The comics of character does not exist!');
            }
          });
      }
    });
  }
}
