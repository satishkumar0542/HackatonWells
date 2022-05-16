import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetpopupComponent } from './assetpopup.component';

describe('AssetpopupComponent', () => {
  let component: AssetpopupComponent;
  let fixture: ComponentFixture<AssetpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
