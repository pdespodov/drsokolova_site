import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit, AfterViewInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(public router: Router) { }

  ngOnInit() {
    this.galleryOptions = [
      { "thumbnails": false, "width": "400px", "height": "300px", preview: false },
      { "breakpoint": 500, "width": "100%", "height": "200px" }
    ];
    this.galleryImages = [
      {
          medium: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png',
          big: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png'
      },
      {
          medium: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt22671785_quantized.png',
          big: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt22671785_quantized.png'
      },
      {
          medium: 'https://i.pinimg.com/originals/a2/ec/1b/a2ec1b56bc8df73657cfb452d219f99c.jpg',
          big: 'https://i.pinimg.com/originals/a2/ec/1b/a2ec1b56bc8df73657cfb452d219f99c.jpg'
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
      document.getElementById("certificates").classList.add("reveal-item-is-visible");
      
      document.getElementById("certificates").scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
      });
    });
  }

  public close() {
    setTimeout(() => {
      document.getElementById("certificates").classList.remove("reveal-item-is-visible");
      
      setTimeout(() => {
        this.router.navigate(["about"]);
      }, 400)
    }, 300);
  }

}
