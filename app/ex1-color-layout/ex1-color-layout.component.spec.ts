import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1ColorLayoutComponent } from './ex1-color-layout.component';

describe('Ex1ColorLayoutComponent', () => {
  let component: Ex1ColorLayoutComponent;
  let fixture: ComponentFixture<Ex1ColorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1ColorLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1ColorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
