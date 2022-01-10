import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adminPage() {
    console.log('go to');
    this.loagindPage();

  }

  loagindPage() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/admin');
    }, 1100);
  }

}
