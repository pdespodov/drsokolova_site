import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-time',
  templateUrl: './work-time.component.html',
  styleUrls: ['./work-time.component.css']
})
export class WorkTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var that = this;

    window.addEventListener('scroll', function(e) {
      let week1 = document.getElementById("icon-week");
      let week2 = document.getElementById("icon-week2");

      if (that.isScrolledIntoView(week1)) {
        document.querySelectorAll(".reveal-item-week-1").forEach(r => {
          r.classList.add("reveal-item-is-visible");
        });
      }

      if (that.isScrolledIntoView(week2)) {
        document.querySelectorAll(".reveal-item-week-2").forEach(r => {
          r.classList.add("reveal-item-is-visible");
        });
        document.querySelectorAll(".reveal-item-week-3").forEach(r => {
          r.classList.add("reveal-item-is-visible");
        });
      }
    });
  }

  public isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      // Only completely visible elements return true:
      var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

      return isVisible;
  }
}
