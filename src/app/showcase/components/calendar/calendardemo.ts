import { Component } from '@angular/core';
import moment from 'jalali-moment';
import 'moment/locale/fa';

@Component({
    templateUrl: './calendardemo.html'
})
export class CalendarDemo {

    date1: moment.Moment;
    date1En: moment.Moment;
    date1Fa: moment.Moment;

    date2: moment.Moment;
    date2Fa: moment.Moment;
    date2En: moment.Moment;

    date3: moment.Moment;
    date3Fa: moment.Moment;
    date3En: moment.Moment;

    date4: moment.Moment;
    date4Fa: moment.Moment;
    date4En: moment.Moment;

    date5: moment.Moment;
    date5Fa: moment.Moment;
    date5En: moment.Moment;

    date6: moment.Moment;
    date6Fa: moment.Moment;
    date6En: moment.Moment;

    date7: moment.Moment;
    date7Fa: moment.Moment;
    date7En: moment.Moment;

    date8: moment.Moment;
    date8Fa: moment.Moment;
    date8En: moment.Moment;

    date9: moment.Moment;
    date9Fa: moment.Moment;
    date9En: moment.Moment;

    date10: moment.Moment;
    date10Fa: moment.Moment;
    date10En: moment.Moment;

    date11: moment.Moment;
    date11Fa: moment.Moment;
    date11En: moment.Moment;

    date12: moment.Moment;
    date12Fa: moment.Moment;
    date12En: moment.Moment;

    date13: moment.Moment;
    date13Fa: moment.Moment;
    date13En: moment.Moment;

    date14: moment.Moment;
    date14Fa: moment.Moment;
    date14En: moment.Moment;

    dates: moment.Moment[];
    datesFa: moment.Moment[];
    datesEn: moment.Moment[];

    rangeDates: moment.Moment[];
    rangeDatesFa: moment.Moment[];
    rangeDatesEn: moment.Moment[];

    minDate: moment.Moment;

    maxDate: moment.Moment;

    minDateEn: moment.Moment;

    maxDateEn: moment.Moment;

    invalidDates: Array<moment.Moment>;
    invalidDatesEn: Array<moment.Moment>;

    ngOnInit() {
        let today = moment().locale('fa');
        this.minDate = moment().locale('fa');
        this.minDate.set('month', this.minDate.jMonth() - 1);
        this.maxDate = moment().locale('fa');
        this.maxDate.set('month', this.minDate.jMonth() + 2);

        this.minDateEn = moment().locale('en');
        this.minDateEn.set('month', this.minDateEn.month() - 1);

        this.maxDateEn = moment().locale('en');
        this.maxDateEn.set('month', this.maxDateEn.month() + 1);

        let invalidDate = moment().locale('fa');
        invalidDate.jDate(moment().jDate() - 1);
        this.invalidDates = [today, invalidDate];

        let todayEn = moment().locale('en');
        let invalidDate1 = moment().locale('en');
        invalidDate.date(moment().date() - 1);
        this.invalidDatesEn = [todayEn, invalidDate1];

    }
}
