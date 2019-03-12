import { Injectable } from '@angular/core';

@Injectable()
export class EndpointService {

  DEBUG = false;
  BASE_PATH = 'https://gateway.marvel.com/v1/public';
  TS = '1';
  API_KEY = '258b4e0e578c679d9479aa0eb6e2f36f';
  HASH = '633d81b33499ac48c4729f8d78af1201';
  DEFAULT_PARAMETERS = { ts: this.TS, apikey: this.API_KEY, hash: this.HASH };
  // DEFAULT_PARAMETERS_STRING = `?ts=${this.TS}&apikey=${this.API_KEY}&hash=${this.HASH}`;
  API = {
    CHARACTERS: `${this.BASE_PATH}/characters`,
    COMICS: `${this.BASE_PATH}/comics`
  }

  constructor() { }
}
