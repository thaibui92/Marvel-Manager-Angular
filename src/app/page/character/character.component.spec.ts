import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CharacterDetailComponent } from "./character.component";
import { UtilityService } from "@app/util";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BaseComponent } from "@app/component/base/base.component";
import { EngineService } from "app/engine/engine.service";
import { EndpointService } from "app/core/endpoint/endpoint.service";
import { HelperService } from "app/core/helper/helper.service";
import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";
import { Comic } from "app/model";


describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), CommonModule, HttpClientModule],
      declarations: [CharacterDetailComponent, BaseComponent],
      providers: [EngineService, UtilityService, EndpointService, HelperService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
  });

  it('should create', () => {
    component.route.params = of({ id: 11233132});
      const res1 = {
          data: {
              results: [{
                  id: 11233132,
                  name: 'Marvel',
                  description: '',
                  thumbnail: new Image(),
                  comics: [new Comic()]
              }]
          }
      };
      const res2 = {
          data: {
              results: [{
                  title: '',
                  description: '',
                  thumbnail: new Image()
              }]
          }
      }
    spyOn(component.engine, 'getCharacter').and.returnValue(of(res1));
    spyOn(component.engine, 'getComicsOfCharacter').and.returnValue(of(res2));
    component.initData();
    expect(component).toBeTruthy();
  });

});
