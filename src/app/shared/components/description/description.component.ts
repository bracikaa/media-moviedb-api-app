import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Media } from '../../interfaces/media';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() media: Media;
  @Input() youtubeKey: string;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getYoutubeUrl() {
    let url = this._sanitizer.bypassSecurityTrustResourceUrl(
      'http://www.youtube.com/embed/' + this.youtubeKey
    );
    return url;
  }
}
