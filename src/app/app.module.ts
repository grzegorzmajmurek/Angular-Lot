import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from '../components/header/header.component';
import {BodyComponent} from '../components/body/body.component';
import {FooterComponent} from '../components/footer/footer.component';
import {MenuComponent} from '../components/header/menu/menu.component';
import {ReservationComponent} from '../components/header/reservation/reservation.component';
import {InformationComponent} from '../components/footer/information/information.component';
import {OfferComponent} from '../components/footer/offer/offer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DropdownTranslationComponent} from '../components/header/dropdown-translation/dropdown-translation.component';
import {DescriptionComponent} from '../components/body/description/description.component';
import {PictureComponent} from '../components/body/picture/picture.component';
import {CarouselComponent} from '../components/body/carousel/carousel.component';
import {CarouselCardComponent} from '../components/body/carousel-card/carousel-card.component';
import {PageNotAvailableComponent} from '../components/body/page-not-available/page-not-available.component';
import {ApiService} from '../services/api.service';
import {SearchProductInputComponent} from '../components/header/search-product-input/search-product-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CollapseComponent} from '../components/body/collapse/collapse.component';
import {DropdownCurrencyComponent} from '../components/header/dropdown-currency/dropdown-currency.component';
import {CurrencyService} from '../services/currency.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    ReservationComponent,
    InformationComponent,
    OfferComponent,
    DropdownTranslationComponent,
    DescriptionComponent,
    PictureComponent,
    CarouselComponent,
    CarouselCardComponent,
    PageNotAvailableComponent,
    SearchProductInputComponent,
    CollapseComponent,
    DropdownCurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule
  ],
  providers: [ApiService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
