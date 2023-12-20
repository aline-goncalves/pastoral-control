import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoralInputSwitchComponent } from './pastoral-input-switch.component';

describe('PastoralInputSwitchComponent', () => {
  let component: PastoralInputSwitchComponent;
  let fixture: ComponentFixture<PastoralInputSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastoralInputSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastoralInputSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
