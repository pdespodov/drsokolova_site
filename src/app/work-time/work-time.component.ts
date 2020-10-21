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
      let element = document.getElementById("icon-week");

      if (that.isScrolledIntoView(element)) {
        document.getElementById("work-time").querySelectorAll(".reveal-item").forEach(r => {
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
