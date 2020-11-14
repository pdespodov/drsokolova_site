import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css']
})
export class MembershipsComponent implements OnInit, AfterViewInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      document.getElementById("memberships").classList.add("reveal-item-is-visible");
      
      document.getElementById("memberships").scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
      });
    });
  }

  public close() {
    setTimeout(() => {
      document.getElementById("memberships").classList.remove("reveal-item-is-visible");
      
      setTimeout(() => {
        this.router.navigate(["about"]);
      }, 400)
    }, 300);
  }

}
