import { Character, Image, Comic } from "./type";

describe('type', () => {
  it('should create', () => {
    const ch= new Character();
    const i= new Image();
    const c= new Comic();
    expect(ch).toBeTruthy();
    expect(i).toBeTruthy();
    expect(c).toBeTruthy();
  });

});
