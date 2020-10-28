import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('input') input: ElementRef;

  constructor(protected stateService: StateService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let currentSearchState = this.stateService.state$.getValue() || '';
    if (currentSearchState.length > 2) {
      this.input.nativeElement.value = currentSearchState;
    }

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        tap((value) => {
          this.searchChange.emit(this.input.nativeElement.value);
          this.stateService.state$.next(this.input.nativeElement.value);
        })
      )
      .subscribe();
  }
}
