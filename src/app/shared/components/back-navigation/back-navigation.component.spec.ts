import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNavigationComponent } from './back-navigation.component';

describe('BackNavigationComponent', () => {
  let component: BackNavigationComponent;
  let fixture: ComponentFixture<BackNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit backClicked()', () => {
    const fixture = TestBed.createComponent(BackNavigationComponent);
    fixture.detectChanges();
    spyOn(component.backClicked, 'emit').and.callThrough();
    component.backHandler();
    fixture.detectChanges();
    expect(component.backClicked.emit).toHaveBeenCalled();
  });

  it('button should have text Back', () => {
    const fixture = TestBed.createComponent(BackNavigationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Back');
  });
});
