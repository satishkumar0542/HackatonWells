import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesPopupComponent } from './beneficiaries-popup.component';

describe('BeneficiariesPopupComponent', () => {
  let component: BeneficiariesPopupComponent;
  let fixture: ComponentFixture<BeneficiariesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiariesPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
