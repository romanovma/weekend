export class TourQuery {
    title: string;
    dateMin: number;
    dateMax: number;
    all: boolean;
    car: boolean;
    bycicle: boolean;
    walk: boolean;
    smallPeriod: boolean;
    middlePeriod: boolean;
    largPeriod: boolean;
    xlargePeriod: boolean;

    constructor (
        title: string = '',
        dateMin: number = new Date().getTime(),
        dateMax: number = new Date().setDate(new Date().getDate() + 1),
        all: boolean = false,
        car: boolean = false,
        bycicle: boolean = false,
        walk: boolean = false,
        smallPeriod: boolean = false,
        middlePeriod: boolean = false,
        largPeriod: boolean = false,
        xlargePeriod: boolean = false
    ) {
        this.title = title;
        this.dateMin = dateMin;
        this.dateMax = dateMax;
        this.all = all;
        this.car = car;
        this.bycicle = bycicle;
        this.walk = walk;
        this.smallPeriod = smallPeriod;
        this.middlePeriod = middlePeriod;
        this.largPeriod = largPeriod;
        this.xlargePeriod = xlargePeriod;
    }
}
