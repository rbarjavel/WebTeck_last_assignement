import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
      if (this.cookie.get('token') == "") this.router.navigate(['/login']);
  }

}

