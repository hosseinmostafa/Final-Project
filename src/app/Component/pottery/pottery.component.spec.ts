import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotteryComponent } from './pottery.component';

describe('PotteryComponent', () => {
  let component: PotteryComponent;
  let fixture: ComponentFixture<PotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotteryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
