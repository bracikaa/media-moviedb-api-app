import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Output() mediaChange: EventEmitter<string> = new EventEmitter<string>();
  currentMedia: string;

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected stateService: StateService
  ) {}

  ngOnInit(): void {
    this.currentMedia = this.route.snapshot.paramMap.get('media');
    this.changeMediaHandler(this.currentMedia);
  }

  changeMediaHandler(typeOfMedia: string): void {
    this.currentMedia = typeOfMedia;
    this.location.replaceState(`/${this.currentMedia}`);
    this.mediaChange.emit(this.currentMedia);
  }
}
