import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2CardComponent } from './ex2-card.component';

describe('Ex2CardComponent', () => {
  let component: Ex2CardComponent;
  let fixture: ComponentFixture<Ex2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
