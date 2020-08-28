import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LostLuggage} from '../../../model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  lostLuggage: LostLuggage;
  displayedImagesIndex = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/lostluggage')
      .subscribe((value: LostLuggage) => this.lostLuggage = value);
  }

  previous(): void {
    if (this.displayedImagesIndex === 0) {
      return;
    }
    this.displayedImagesIndex = this.displayedImagesIndex - 1;
  }

  next(): void {
    if (this.displayedImagesIndex === this.lostluggageImages.length - 1) {
      return;
    }
    this.displayedImagesIndex = this.displayedImagesIndex + 1;
  }

  get imagesIndex(): number {
    return this.displayedImagesIndex;
  }

  get lostluggageNumber(): number {
    return this.lostLuggage ? this.lostLuggage.number : null;
  }

  get lostluggageImages(): string[] {
    return this.lostLuggage ? this.lostLuggage.images : [];
  }

}
