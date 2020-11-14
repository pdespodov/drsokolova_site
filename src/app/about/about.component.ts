import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

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
  showQualification: boolean = false;

  ngOnInit() {
    this.galleryOptions = [
      { "thumbnails": false, "width": "400px", "height": "300px" },
      { "breakpoint": 500, "width": "100%", "height": "200px" }
    ];
    this.galleryImages = [
      {
          medium: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
          big: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
      },
      {
          medium: 'https://www.lewermark.com/wp-content/uploads/2018/07/doctor5-1.png',
          big: 'https://www.lewermark.com/wp-content/uploads/2018/07/doctor5-1.png'
      },
      {
          medium: 'https://health.uconn.edu/orthopedics-sports-medicine/wp-content/uploads/sites/161/2018/03/child-doctor-highfive.jpg',
          big: 'https://health.uconn.edu/orthopedics-sports-medicine/wp-content/uploads/sites/161/2018/03/child-doctor-highfive.jpg'
      }
    ];

    setTimeout(() => {
      var els = document.getElementsByClassName("ngx-gallery-arrow");
      Array.prototype.forEach.call(els, function(el) {
          el.style.color = "#d59541";
      });
    }, 400);
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

  public goToQualifications(){
    this.router.navigate(['about/qualifications']);
  }

  public goToCertificates(){
    this.router.navigate(['about/certificates']);
  }

  public goToMemberships(){
    this.router.navigate(['about/memberships']);
  }
}
