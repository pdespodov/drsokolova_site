import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) { }

  hovered: string = "";
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit() {
    this.galleryOptions = [
      { "thumbnails": false },
      { "breakpoint": 500, "width": "100%", "height": "200px" }
    ];
    this.galleryImages = [
      {
          medium: '../../assets/1-medium.jpeg'
      },
      {
          medium: '../../assets/2-medium.jpeg'
      },
      {
          medium: '../../assets/3-medium.jpeg'
      }
  ];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      document.getElementById("about").classList.add("reveal-item-is-visible");
    });
  }

  public aboutMeHover(event: MouseEvent, hovered: string) {
    if(!event.srcElement)
      return;

    let element = event.srcElement as HTMLElement;

    element.classList.add("hovered");

    this.hovered = hovered;
  }

  public aboutMeLeave(event: MouseEvent) {
    if(!event.srcElement)
      return;

      let element = event.srcElement as HTMLElement;

      element.classList.remove("hovered");

      this.hovered = "";
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
