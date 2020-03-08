import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination';
import {DestinationService} from '../destination.service';
import { AuthentificationFormComponent } from '../authentification-form/authentification-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageaccueil',
  templateUrl: './pageaccueil.component.html',
  styleUrls: ['./pageaccueil.component.css']
})
export class PageaccueilComponent implements OnInit {

  destinations: Destination[] = [];
  id: number;
  nom: string;
  image: string;//a modifier surement
  destination: Destination = new Destination();
  message: string;


  constructor(private destinationService: DestinationService, private router: Router) { }

  // ngOnInit(): void {
  //   this.destinationService.change.subscribe(datas => this.destinations = datas);
  // }

  ngOnInit() {

     this.destinationService.change.subscribe(datas => this.destinations = datas);
     this.destinationService.getAllDestinations();
  }

  // deleteDestination(id: number) {

  //   this.destinationService.deleteDestination(id)
  //   .subscribe(data => {console.log(data);
  //                       this.getAllDestinations();
  //                     },
  //                     error => console.log(error));


  // }

  OnsubmitDelete() {
    this.destinationService.deleteDestination(this.destination.id);
    this.router.navigate(['pageaccueil']);
  }


  DestinationDetails(id: number) {
    this.router.navigate([`details`, id]);
  }

  // ngOnDestroy() {
  //   this.destinationService.change.unsubscribe();
  // }

}
