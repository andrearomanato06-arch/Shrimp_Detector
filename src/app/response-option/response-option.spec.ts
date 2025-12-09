import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseOption } from './response-option';

describe('ResponseOption', () => {
  let component: ResponseOption;
  let fixture: ComponentFixture<ResponseOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseOption);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
