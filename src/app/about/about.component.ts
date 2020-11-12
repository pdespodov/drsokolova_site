import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      document.getElementById("about").classList.add("reveal-item-is-visible");
    });
  }

  public aboutMeHover(event: MouseEvent) {
    if(!event.srcElement)
      return;

    let element = event.srcElement as HTMLElement;

    element.classList.add("hovered");
  }

  public aboutMeLeave(event: MouseEvent) {
    if(!event.srcElement)
      return;

      let element = event.srcElement as HTMLElement;

      element.classList.remove("hovered");
  }

  public close() {
    setTimeout(() => {
      document.getElementById("about").classList.remove("reveal-item-is-visible");
      
      document.querySelectorAll(".reveal-item-address").forEach(r => {
        r.classList.add("reveal-item-is-visible");
      });

      setTimeout(() => {
        this.router.navigate([""]);
      }, 400)
    }, 300);
  }

}
