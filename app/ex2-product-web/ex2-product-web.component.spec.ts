import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2ProductWebComponent } from './ex2-product-web.component';

describe('Ex2ProductWebComponent', () => {
  let component: Ex2ProductWebComponent;
  let fixture: ComponentFixture<Ex2ProductWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2ProductWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2ProductWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
