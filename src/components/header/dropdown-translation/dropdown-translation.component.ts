import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';
import {Language} from '../../../model';

@Component({
  selector: 'app-dropdown-translation',
  templateUrl: './dropdown-translation.component.html',
  styleUrls: ['./dropdown-translation.component.scss']
})
export class DropdownTranslationComponent implements OnInit {

  show = false;
  language: Language = environment.language;
  Language = Language;

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  get isShow(): boolean {
    return this.show;
  }

  showList(): void {
    this.show = !this.show;
  }

  selectLanguage(language: Language): void {
    this.language = language;
    this.translate.use(language);
    this.showList();
  }

}


