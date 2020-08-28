import {Component, Input, OnInit} from '@angular/core';
import {Currency, RecommendedItems} from '../../../model';
import {CurrencyService} from '../../../services/currency.service';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit {
  @Input() detalis: RecommendedItems = null;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
  }

  get currency(): Currency {
    return this.currencyService.getCurrency;
  }
}
