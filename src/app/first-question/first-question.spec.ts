import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstQuestion } from './first-question';

describe('FirstQuestion', () => {
  let component: FirstQuestion;
  let fixture: ComponentFixture<FirstQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
