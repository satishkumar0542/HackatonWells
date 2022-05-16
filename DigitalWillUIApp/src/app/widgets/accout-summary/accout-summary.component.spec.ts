import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutSummaryComponent } from './accout-summary.component';

describe('AccoutSummaryComponent', () => {
  let component: AccoutSummaryComponent;
  let fixture: ComponentFixture<AccoutSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoutSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoutSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
