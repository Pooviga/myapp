import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiMsgesComponent } from './hi-msges.component';

describe('HiMsgesComponent', () => {
  let component: HiMsgesComponent;
  let fixture: ComponentFixture<HiMsgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiMsgesComponent]
    });
    fixture = TestBed.createComponent(HiMsgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
