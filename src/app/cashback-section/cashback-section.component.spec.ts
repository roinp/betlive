import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackSectionComponent } from './cashback-section.component';

describe('CashbackSectionComponent', () => {
  let component: CashbackSectionComponent;
  let fixture: ComponentFixture<CashbackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashbackSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
