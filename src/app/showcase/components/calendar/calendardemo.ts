import { Component } from '@angular/core';
import dayjs from 'dayjs';
import jalali from 'jalali-dayjs'
@Component({
    templateUrl: './calendardemo.html'
})
export class CalendarDemo {

    date1: dayjs.Dayjs;
    date1En: dayjs.Dayjs;
    date1Fa: dayjs.Dayjs;

    date2: dayjs.Dayjs;
    date2Fa: dayjs.Dayjs;
    date2En: dayjs.Dayjs;

    date3: dayjs.Dayjs;
    date3Fa: dayjs.Dayjs;
    date3En: dayjs.Dayjs;

    date4: dayjs.Dayjs;
    date4Fa: dayjs.Dayjs;
    date4En: dayjs.Dayjs;

    date5: dayjs.Dayjs;
    date5Fa: dayjs.Dayjs;
    date5En: dayjs.Dayjs;

    date6: dayjs.Dayjs;
    date6Fa: dayjs.Dayjs;
    date6En: dayjs.Dayjs;

    date7: dayjs.Dayjs;
    date7Fa: dayjs.Dayjs;
    date7En: dayjs.Dayjs;

    date8: dayjs.Dayjs;
    date8Fa: dayjs.Dayjs;
    date8En: dayjs.Dayjs;

    date9: dayjs.Dayjs;
    date9Fa: dayjs.Dayjs;
    date9En: dayjs.Dayjs;

    date10: dayjs.Dayjs;
    date10Fa: dayjs.Dayjs;
    date10En: dayjs.Dayjs;

    date11: dayjs.Dayjs;
    date11Fa: dayjs.Dayjs;
    date11En: dayjs.Dayjs;

    date12: dayjs.Dayjs;
    date12Fa: dayjs.Dayjs;
    date12En: dayjs.Dayjs;

    date13: dayjs.Dayjs;
    date13Fa: dayjs.Dayjs;
    date13En: dayjs.Dayjs;

    date14: dayjs.Dayjs;
    date14Fa: dayjs.Dayjs;
    date14En: dayjs.Dayjs;

    dates: dayjs.Dayjs[];
    datesFa: dayjs.Dayjs[];
    datesEn: dayjs.Dayjs[];

    rangeDates: dayjs.Dayjs[];
    rangeDatesFa: dayjs.Dayjs[];
    rangeDatesEn: dayjs.Dayjs[];

    minDate: dayjs.Dayjs;

    maxDate: dayjs.Dayjs;

    minDateEn: dayjs.Dayjs;

    maxDateEn: dayjs.Dayjs;

    invalidDates: Array<dayjs.Dayjs>;
    invalidDatesEn: Array<dayjs.Dayjs>;

    ngOnInit() {
        dayjs.extend(jalali);
        let today = dayjs().locale('fa');
        this.minDate = dayjs(today).locale('fa').set('month', today.month() - 1);
        this.maxDate = dayjs(today).locale('fa').set('month', today.month() + 1);

        let todayEn = dayjs().locale('en');
        this.minDateEn = dayjs(todayEn).set('month', todayEn.month() - 1);
        this.maxDateEn = dayjs(todayEn).set('month', todayEn.month() + 1);

        let invalidDate = dayjs().locale('fa').set('date', dayjs().date() - 1);
        this.invalidDates = [today, invalidDate];

        let invalidDate1 = dayjs().locale('en').set('date', dayjs().date() - 1);
        this.invalidDatesEn = [todayEn, invalidDate];

    }
}
