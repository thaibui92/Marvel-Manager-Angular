export class  Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
  comics: Comic[]
}

export class  Image {
  path: string;
  extension: string;
}

export class  Comic{
  title: string;
  description: string;
  thumbnail: Image;
}