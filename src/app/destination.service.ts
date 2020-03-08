import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
import { EventEmitter } from '@angular/core';
import { Destination } from './destination';
import {Observable} from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private destinations :Destination[];
  change: EventEmitter<Destination[]> = new EventEmitter;

  constructor(private httpclient: HttpClient) { }

  getAllDestinations() {

    this.httpclient.get<Destination[]>(`${environment.serverUrl}destinations/all`)
      .subscribe((datas) => {
        this.destinations=datas;
        datas.forEach(d =>console.log(d.region));
        this.change.emit(this.destinations);
      })


  }


  deleteDestination(id: number) {
    this.httpclient.delete(`${environment.serverUrl}destination/delete/${id}`);
  }

}
