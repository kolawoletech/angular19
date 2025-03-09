import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetWebNotificationComponent } from './set-web-notification.component';

describe('SetWebNotificationComponent', () => {
  let component: SetWebNotificationComponent;
  let fixture: ComponentFixture<SetWebNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetWebNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetWebNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
