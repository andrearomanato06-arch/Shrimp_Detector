import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirimpDetectorWelcomePage } from './shirimp-detector-welcome-page';

describe('ShirimpDetectorWelcomePage', () => {
  let component: ShirimpDetectorWelcomePage;
  let fixture: ComponentFixture<ShirimpDetectorWelcomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShirimpDetectorWelcomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShirimpDetectorWelcomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
