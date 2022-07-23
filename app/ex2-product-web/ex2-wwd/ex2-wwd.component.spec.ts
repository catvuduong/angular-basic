import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2WwdComponent } from './ex2-wwd.component';

describe('Ex2WwdComponent', () => {
  let component: Ex2WwdComponent;
  let fixture: ComponentFixture<Ex2WwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2WwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2WwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
