import { Injectable } from "@angular/core";
import { EndpointService, HelperService } from "app/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class EngineService {
  constructor(public endpoint: EndpointService, public helper: HelperService) {}

  getCharacters(request?, showLoading = false) {
    const url = this.endpoint.API.CHARACTERS;
    const headers = new HttpHeaders();
    let params = this.endpoint.DEFAULT_PARAMETERS;
    if(request){
      params = {...params, ...request};
    }
    return this.helper.get(url, headers, params, showLoading);
  }

  getCharacter(id: string, showLoading = false){
    const url = `${this.endpoint.API.CHARACTERS}/${id}`;
    const headers = new HttpHeaders();
    return this.helper.get(url, headers, this.endpoint.DEFAULT_PARAMETERS, showLoading);
  }

  getComicsOfCharacter(id: string, showLoading = false){
    const url = `${this.endpoint.API.CHARACTERS}/${id}/comics`;
    const headers = new HttpHeaders();
    return this.helper.get(url, headers, this.endpoint.DEFAULT_PARAMETERS, showLoading);
  }
}
