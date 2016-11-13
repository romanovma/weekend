export class TourQuery {
    title: string;
    dates: number;
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
