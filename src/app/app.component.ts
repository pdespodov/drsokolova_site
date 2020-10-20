import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Д-р Искра Соколва - GP';

  public toggleMobileMenu(event) {
    document.getElementById("site-header-menu-icon").classList.toggle("change");
    document.querySelector(".site-header").classList.toggle("site-header-is-expanded");
    document.querySelector(".site-header-menu-content").classList.toggle("site-header-menu-content-is-visible");
  }
}
