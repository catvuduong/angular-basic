import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusExComponent } from './bus-ex.component';

describe('BusExComponent', () => {
  let component: BusExComponent;
  let fixture: ComponentFixture<BusExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
