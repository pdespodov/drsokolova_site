import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  iconAddress: HTMLElement;
  contacts: HTMLElement;
  innerWidth: number = 0;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    var that = this;
    this.iconAddress = document.getElementById("icon-address");
    this.contacts = document.getElementById("contacts-wrapper");

    this.checkAddress(that);

    window.addEventListener('scroll', function(e) {
      that.checkAddress(that);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  public isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
  }

  public isScrolledOutOfView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;

    var scrolledOut = elemTop > window.innerHeight;

    return scrolledOut;
  }

  public checkAddress(that:any) {
    if (that.isScrolledIntoView(that.iconAddress)) {
      document.querySelectorAll(".reveal-item-address").forEach(r => {
        r.classList.add("reveal-item-is-visible");
      });
    } else {
      if(this.innerWidth > 800)
        document.querySelectorAll(".reveal-item-address").forEach(r => {
          r.classList.remove("reveal-item-is-visible");
        });
    }

    if(that.isScrolledOutOfView(this.contacts)) {
      document.querySelectorAll(".reveal-item-address").forEach(r => {
        r.classList.add("reveal-item-is-visible");
      });
    }
  }

}
