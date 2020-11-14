import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  constructor(public router: Router) {
  }

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

  public scrollToWorkTime(event) {
    event.preventDefault();
    
    document.getElementById("work-time").scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }

   goToAbout(event: MouseEvent) {
      event.preventDefault();

      this.router.navigate(['about']);
       
      setTimeout(() => {
          document.getElementById("about").scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 300);
   }
}
