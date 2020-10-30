import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LoaderComponent, MockedApiService } from '../../mocks/mocks';
import { ApiService } from '../../services/api.service';
import { StateService } from '../../services/state.service';

import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      declarations: [TabsComponent, LoaderComponent],
      providers: [
        { provide: ApiService, useClass: MockedApiService },
        { provide: StateService, useClass: MockedApiService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param) => {
                    return 'shows';
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should have text Back', () => {
    const fixture = TestBed.createComponent(TabsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('button')[0].textContent).toContain(
      'MOVIES'
    );
  });

  it('button should have text Back', () => {
    const fixture = TestBed.createComponent(TabsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('button')[1].textContent).toContain(
      'TV SHOWS'
    );
  });

  it('currentMedia should have been defined', () => {
    const fixture = TestBed.createComponent(TabsComponent);
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.currentMedia).toBeTruthy();
    expect(component.currentMedia).toBe('shows');
  });

});
