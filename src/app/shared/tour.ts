import { Operator } from './operator';

export class Tour {
  id: number;
  title: string;
  video: string[];
  dates: Date[];
  duration: number;
  movementType: string;
  price: number;
  operator: Operator;
  rating: number;
  description: string;
  photo: string[];
  visited: number;
}
