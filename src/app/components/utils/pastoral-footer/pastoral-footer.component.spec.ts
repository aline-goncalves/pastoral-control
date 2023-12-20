import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoralFooterComponent } from './pastoral-footer.component';

describe('PastoralFooterComponent', () => {
  let component: PastoralFooterComponent;
  let fixture: ComponentFixture<PastoralFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastoralFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastoralFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
