import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourBoxComponent } from './colour-box.component';

describe('ColourBoxComponent', () => {
  let component: ColourBoxComponent;
  let fixture: ComponentFixture<ColourBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColourBoxComponent]
    });
    fixture = TestBed.createComponent(ColourBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
