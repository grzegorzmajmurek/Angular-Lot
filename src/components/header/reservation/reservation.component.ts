import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../../../model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  reservation$: Reservation = {number: '', id: 1};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/reservation')
      .subscribe((value: Reservation) => this.reservation$ = value);
  }

}
