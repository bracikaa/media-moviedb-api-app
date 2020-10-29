import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isVisible should be true', async () => {
    const fixture = TestBed.createComponent(LoaderComponent);
    fixture.detectChanges();
    await component.show();
    fixture.detectChanges();
    expect(component.isVisible()).toBe(true);
  });

  it('isVisible should be false', async () => {
    const fixture = TestBed.createComponent(LoaderComponent);
    fixture.detectChanges();
    await component.hide();
    fixture.detectChanges();
    expect(component.isVisible()).toBe(false);
  });
});
