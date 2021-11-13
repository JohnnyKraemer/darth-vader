export class Comic {
  id: number = 0;
  title: string = '';
  description: string = '';
  startYear: string = '';
  endYear: string = '';
  thumbnail: Thumbnail;
}

export class Thumbnail{
    extension: string = '';
    path: string = '';
}