import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Media } from '../../interfaces/media';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() media: Media;
  @Input() youtubeKey: string;
  
  innerWidth: number;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  getYoutubeUrl(): SafeResourceUrl {
    let url = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.youtubeKey
    );
    return url;
  }

  getWidth(): number {
    if (this.innerWidth < 475) {
      return 375;
    } else {
      return 500;
    }
  }
}
