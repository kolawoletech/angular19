import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmergencyContactComponent } from './set-emergency-contact.component';

describe('SetEmergencyContactComponent', () => {
  let component: SetEmergencyContactComponent;
  let fixture: ComponentFixture<SetEmergencyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetEmergencyContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetEmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
