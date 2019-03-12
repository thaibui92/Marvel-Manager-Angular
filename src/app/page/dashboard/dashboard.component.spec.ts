import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DashboardComponent } from "./dashboard.component";
import { UtilityService } from "@app/util";
import { EngineService } from "app/engine/engine.service";
import { EndpointService } from "app/core/endpoint/endpoint.service";
import { BaseComponent } from "@app/component/base/base.component";
import { HelperService } from "app/core/helper/helper.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { of } from "rxjs";
import { Comic, Character } from "app/model";



describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([]), CommonModule, HttpClientModule],
            declarations: [DashboardComponent, BaseComponent],
            providers: [EngineService, UtilityService, EndpointService, HelperService]
        })
            .compileComponents();
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call getDataLazyLoad', () => {
        const res = {
            data: {
                results: [{
                    id: 11233132,
                    name: 'Marvel',
                    description: '',
                    thumbnail: new Image(),
                    comics: [new Comic()]
                }],
                total: 1500
            }
        }
        spyOn(component.engine, 'getCharacters').and.returnValue(of(res));
        component.getDataLazyLoad();
        expect(component.total).toBe(1500);
    });

    it('should call onScrollDown', () => {
        spyOn(component, 'getDataLazyLoad');
        component.onScrollDown();
        expect(component.getDataLazyLoad).toHaveBeenCalled();
    });

    it('should call getLimitedString', () => {
        expect(component.getLimitedString('test', 2)).toBe('t...');
    });
});
