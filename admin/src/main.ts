import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import BigNumber from 'bignumber.js';

BigNumber.config({
  FORMAT: {
    // the decimal separator
    decimalSeparator: ',',
    // the grouping separator of the integer part
    groupSeparator: '.',
    // the primary grouping size of the integer part
    groupSize: 3,
    // the secondary grouping size of the integer part
    secondaryGroupSize: 0,
    // the grouping separator of the fraction part
    fractionGroupSeparator: '',
    // the grouping size of the fraction part
    fractionGroupSize: 0
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

