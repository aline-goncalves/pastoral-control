import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoralFormComponent } from './pastoral-form.component';

describe('PastoralFormComponent', () => {
  let component: PastoralFormComponent;
  let fixture: ComponentFixture<PastoralFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastoralFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastoralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
