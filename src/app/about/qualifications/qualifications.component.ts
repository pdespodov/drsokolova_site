import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit, AfterViewInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      document.getElementById("qualifications").classList.add("reveal-item-is-visible");
      
      document.getElementById("qualifications").scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
      });
    });
  }

  public close() {
    setTimeout(() => {
      document.getElementById("qualifications").classList.remove("reveal-item-is-visible");
      
      setTimeout(() => {
        this.router.navigate(["about"]);
      }, 400)
    }, 300);
  }

}
