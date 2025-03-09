import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPhoneNumberComponent } from './set-phone-number.component';

describe('SetPhoneNumberComponent', () => {
  let component: SetPhoneNumberComponent;
  let fixture: ComponentFixture<SetPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetPhoneNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
