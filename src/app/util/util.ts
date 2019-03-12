import { Image } from '../model/type';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

    constructor() { }
    getImageUrl (image: Image) {
    const { path, extension } = image;
    return `${path}.${extension}`;
  }
}