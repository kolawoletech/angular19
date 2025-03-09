import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGenderComponent } from './set-gender.component';

describe('SetGenderComponent', () => {
  let component: SetGenderComponent;
  let fixture: ComponentFixture<SetGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetGenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
