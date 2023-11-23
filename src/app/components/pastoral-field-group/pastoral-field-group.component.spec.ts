import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoralFieldGroupComponent } from './pastoral-field-group.component';

describe('PastoralFieldGroupComponent', () => {
  let component: PastoralFieldGroupComponent;
  let fixture: ComponentFixture<PastoralFieldGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastoralFieldGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastoralFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
