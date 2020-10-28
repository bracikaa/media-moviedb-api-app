import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IndividualMediaComponent } from './individual-media.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { StateService } from 'src/app/shared/services/state.service';
import {
  LoaderComponent,
  MockedApiService,
  MockedStateService,
} from 'src/app/shared/mocks/mocks';

describe('IndividualMediaComponent', () => {
  let component: IndividualMediaComponent;
  let fixture: ComponentFixture<IndividualMediaComponent>;
  let api: MockedApiService;
  let stateService: MockedStateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      declarations: [IndividualMediaComponent, LoaderComponent],
      providers: [
        { provide: ApiService, useClass: MockedApiService },
        { provide: StateService, useClass: MockedStateService },
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(IndividualMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    api = new MockedApiService();
    stateService = new MockedStateService();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render <app-loader>', () => {
    const fixture = TestBed.createComponent(IndividualMediaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-loader')).toBeTruthy();
  });

  it('should render <app-back-navigation>', () => {
    const fixture = TestBed.createComponent(IndividualMediaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-back-navigation')).toBeTruthy();
  });

  it('should render <app-description>', async () => {
    const fixture = TestBed.createComponent(IndividualMediaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    await component.getIndividualMedia();
    fixture.detectChanges();
    expect(compiled.querySelector('app-description')).toBeTruthy();
  });
});
