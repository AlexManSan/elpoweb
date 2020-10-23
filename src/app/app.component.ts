import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Elpo';

  constructor(private router: Router) {}
  
  exibindoNavbar() { 
    // const loc = this.router.url+" !== '/login'";
    // console.log("onde estou: !== /login ? => "+loc);
    return this.router.url !== '/login';
  }
}
