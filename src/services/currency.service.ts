import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Currency} from '../model';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  currency: Currency = environment.currency;

  constructor() {
  }

  get getCurrency(): Currency {
    return this.currency;
  }

  setCurrency(newCurrency: Currency): void {
    this.currency = newCurrency;
  }
}
