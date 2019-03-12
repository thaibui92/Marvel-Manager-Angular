import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { EndpointService } from './core/endpoint/endpoint.service';
import { HelperService } from './core/helper/helper.service';
import { UtilityService } from './util/util';
import { BaseComponent } from './component/base/base.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CharacterDetailComponent } from './page/character/character.component';
import { EngineService } from './engine/engine.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    InfiniteScrollModule
  ],
  declarations: [
    AppComponent,
    BaseComponent,
    DashboardComponent,
    CharacterDetailComponent
  ],
  providers: [
    HelperService,
    EndpointService,
    EngineService,
    UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
