import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'Д-р Искра Соколва - GP';

  ngOnInit() {
    window.addEventListener('scroll', function(e) {
      if (window.scrollY > 200) {
        document.querySelector(".site-header").classList.add("site-header-scroll");
      } else {
        document.querySelector(".site-header").classList.remove("site-header-scroll");
      }
    });
  }

  public toggleMobileMenu(event) {
    document.getElementById("site-header-menu-icon").classList.toggle("change");
    document.querySelector(".site-header").classList.toggle("site-header-is-expanded");
    document.querySelector(".site-header-menu-content").classList.toggle("site-header-menu-content-is-visible");
  }
}
