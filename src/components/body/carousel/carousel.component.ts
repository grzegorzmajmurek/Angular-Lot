import {Component, OnInit} from '@angular/core';
import {RecommendedItems} from '../../../model';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  recommend: Array<RecommendedItems> = null;

  constructor(private api: ApiService) {
    api.recommend().subscribe(value => this.recommend = value);
  }

  itemDetails(id: number): RecommendedItems {
    return this.recommend ? this.recommend.find(item => item.id === id) : null;
  }

  ngOnInit(): void {
  }

}


