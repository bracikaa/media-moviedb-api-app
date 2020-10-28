import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-back-navigation',
  templateUrl: './back-navigation.component.html',
  styleUrls: ['./back-navigation.component.scss']
})
export class BackNavigationComponent implements OnInit {
  @Output() backClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  backHandler() {
    this.backClicked.emit(true);
  }

}
