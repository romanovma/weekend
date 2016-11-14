import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthNumToText'
})
export class MonthNumToTextPipe implements PipeTransform {

  transform(value: number): string {
      let val = (value + 12) % 12 + 1;
      switch (val) {
          case 1:
              return 'январь';
          case 2:
              return 'февраль';
          case 3:
              return 'март';
          case 4:
              return 'апрель';
          case 5:
              return 'май';
          case 6:
              return 'июнь';
          case 7:
              return 'июль';
          case 8:
              return 'август';
          case 9:
              return 'сентябрь';
          case 10:
              return 'октябрь';
          case 11:
              return 'ноябрь';
          case 12:
              return 'декабрь';
      }
  }

}
