import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoralHeaderComponent } from './pastoral-header.component';

describe('PastoralHeaderComponent', () => {
  let component: PastoralHeaderComponent;
  let fixture: ComponentFixture<PastoralHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastoralHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastoralHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
