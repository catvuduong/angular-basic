import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneExComponent } from './phone-ex.component';

describe('PhoneExComponent', () => {
  let component: PhoneExComponent;
  let fixture: ComponentFixture<PhoneExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
