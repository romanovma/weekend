export class Tour {
  id: number;
  title: string;
  video: string[];
  dates: Date[];
  duration: number;
  movementType: string;
  price: number;
  rating: number;
  description: string;
  photo: string[];
  visited: number;
  operator: string;
  important: string[];
  included: string[];
  notIncluded: string[];

  constructor(
    id?: number,
    title: string = '',
    video: string[] = [],
    dates: Date[] = [],
    duration: number = 0,
    movementType: string = '',
    price: number = 0,
    rating: number = 0,
    description: string = '',
    photo: string[] = [],
    visited: number = 0,
    operator: string = '',
    important: string[] = [],
    included: string[] = [],
    notIncluded: string[] = [],
  ) {  }

}
