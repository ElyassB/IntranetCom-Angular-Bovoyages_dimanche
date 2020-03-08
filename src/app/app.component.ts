import { Component } from '@angular/core';
import{DestinationService} from './destination.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Entrer sur l'intranet";
  constructor(private router: Router) { }

  gotoAuthForm(){
    this.router.navigate(['/authentification-form']);
  }
  
}
