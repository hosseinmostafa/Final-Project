import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFondComponent } from './not-fond.component';

describe('NotFondComponent', () => {
  let component: NotFondComponent;
  let fixture: ComponentFixture<NotFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
