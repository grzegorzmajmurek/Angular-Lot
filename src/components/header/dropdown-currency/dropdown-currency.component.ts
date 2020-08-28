import {Component, OnInit} from '@angular/core';
import {Currency} from '../../../model';
import {environment} from '../../../environments/environment';
import {CurrencyService} from '../../../services/currency.service';

@Component({
  selector: 'app-dropdown-currency',
  templateUrl: './dropdown-currency.component.html',
  styleUrls: ['./dropdown-currency.component.scss']
})
export class DropdownCurrencyComponent implements OnInit {

  show = false;
  currency: Currency = environment.currency;
  Currency = Currency;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {

  }

  get isShow(): boolean {
    return this.show;
  }

  showList(): void {
    this.show = !this.show;
  }

  selectCurrency(currency: Currency): void {
    this.currency = currency;
    this.currencyService.setCurrency(currency);
    this.showList();
  }

}
