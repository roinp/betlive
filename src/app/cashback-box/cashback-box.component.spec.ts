import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackBoxComponent } from './cashback-box.component';

describe('CashbackBoxComponent', () => {
  let component: CashbackBoxComponent;
  let fixture: ComponentFixture<CashbackBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashbackBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
