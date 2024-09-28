import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SginInSignUpComponent } from './sgin-in-sign-up.component';

describe('SginInSignUpComponent', () => {
  let component: SginInSignUpComponent;
  let fixture: ComponentFixture<SginInSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SginInSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SginInSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
