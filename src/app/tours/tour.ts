export class Tour {
  id: number;
  title: string;
  video: string[];
  dates: number[];
  duration: number;
  movementType: string;
  area: string;
  meetingPlace: string;
  price: number;
  rating: number;
  descriptionTitle: string;
  description: string;
  photo: string[];
  visited: number;
  operator: string;
  collections: string[];
  city: string;
  important: string[];
  included: string[];
  notIncluded: string[];
  cabinetId: number;

  constructor(
    title: string = 'Заголовок',
    video: string[] = [],
    dates: number[] = [1483185300000],
    duration: number = 0,
    movementType: string = 'walk',
    area: string = '',
    meetingPlace: string = '',
    price: number = 0,
    rating: number = 5,
    descriptionTitle: string= 'Заголовок описания',
    description: string = 'Описание',
    photo: string[] = [],
    visited: number = 0,
    operator: string = '',
    important: string[] = [],
    included: string[] = [],
    notIncluded: string[] = [],
  ) {
      this.title = title;
      this.video = video;
      this.dates = dates;
      this.duration = duration;
      this.movementType = movementType;
      this.area = area;
      this.meetingPlace = meetingPlace;
      this.price = price;
      this.rating = rating;
      this.descriptionTitle = descriptionTitle;
      this.description = description;
      this.photo = photo;
      this.visited = visited;
      this.operator = operator;
      this.important = important;
      this.included = included;
      this.notIncluded = notIncluded;
    }

}
