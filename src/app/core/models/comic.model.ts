export class Comic {
  id: number = 0;
  title: string = '';
  description: string = '';
  startYear: string = '';
  endYear: string = '';
  thumbnail: Thumbnail;
  dates: Date[] = null;
  creators: Creators = new Creators();
  urls: URL[] = null;
  series: Serie = new Serie();
}

export class Thumbnail {
  extension: string = '';
  path: string = '';
}

export class Date{
  type: string = '';
  date: string = '';
}

export class Creators{
  available: number = 0;
  items: Creator[] = null;
}

export class Creator{
  name: string = '';
  role: string = '';
}

export class URL{
  type: string = '';
  url: string = '';
}

export class Serie{
  name: string = '';
  resourceURI: string = '';
}