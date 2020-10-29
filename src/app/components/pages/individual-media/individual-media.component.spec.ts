import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IndividualMediaComponent } from './individual-media.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { StateService } from 'src/app/shared/services/state.service';
import {
  LoaderComponent,
  MockedApiService,
  MockedStateService,
} from 'src/app/shared/mocks/mocks';
import { BackNavigationComponent } from 'src/app/shared/components/back-navigation/back-navigation.component';

describe('IndividualMediaComponent', () => {
  let component: IndividualMediaComponent;
  let fixture: ComponentFixture<IndividualMediaComponent>;
  let api: MockedApiService;
  let stateService: MockedStateService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      declarations: [
        IndividualMediaComponent,
        LoaderComponent,
        BackNavigationComponent,
      ],
      providers: [
        { provide: ApiService, useClass: MockedApiService },
        { provide: StateService, useClass: MockedStateService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param) => {
                  if (param === 'media') {
                    return 'movies';
                  } else if (param === 'id') {
                    return '423';
                  }
                },
              },
            },
          },
        },
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

  it('should have id defined', () => {
    const fixture = TestBed.createComponent(IndividualMediaComponent);
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.id).toBeTruthy();
    expect(component.id).toBe('423');
  });

  it('should have media defined', () => {
    const fixture = TestBed.createComponent(IndividualMediaComponent);
    fixture.detectChanges();
    expect(component.typeOfMedia).toBeTruthy();
    expect(component.typeOfMedia).toBe('movies');
  });

  it('should render <app-description>', async () => {
    const fixture = TestBed.createComponent(IndividualMediaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    await component.getIndividualMedia();
    fixture.detectChanges();
    expect(compiled.querySelector('app-description')).toBeTruthy();
  });

  it('should have configuration string defined', async () => {
    const fixture = TestBed.createComponent(IndividualMediaComponent);
    fixture.detectChanges();
    await component.getIndividualMedia();
    fixture.detectChanges();
    expect(component.configurationString).toBeTruthy();
  });

  it('should call getIndividualMedia()', () => {
    const fixture = TestBed.createComponent(IndividualMediaComponent);
    fixture.detectChanges();
    spyOn(component, 'getIndividualMedia').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.getIndividualMedia).toHaveBeenCalled();
  });

  it('should have media defined', async () => {
    const fixture = TestBed.createComponent(IndividualMediaComponent);
    fixture.detectChanges();
    await component.getIndividualMedia();
    fixture.detectChanges();
    expect(component.media).toBeTruthy();
  });
});
