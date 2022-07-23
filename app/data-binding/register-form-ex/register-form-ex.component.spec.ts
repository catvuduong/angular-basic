import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormExComponent } from './register-form-ex.component';

describe('RegisterFormExComponent', () => {
  let component: RegisterFormExComponent;
  let fixture: ComponentFixture<RegisterFormExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
