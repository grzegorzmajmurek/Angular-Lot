import {Component, Input, OnInit} from '@angular/core';
import {ICON} from '../../../model';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  @Input() title;
  @Input() description;
  @Input() index;
  icon: ICON = ICON.DOWN;

  constructor() {
  }

  ngOnInit(): void {
  }

  get collapseIcon(): ICON {
    return this.icon;
  }

  changeIcon(): void {
    if (this.icon === ICON.DOWN) {
      this.icon = ICON.UP;
    } else {
      this.icon = ICON.DOWN;
    }
  }
}
