import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTabComponent } from './finance-tab.component';

describe('FinanceTabComponent', () => {
  let component: FinanceTabComponent;
  let fixture: ComponentFixture<FinanceTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceTabComponent]
    });
    fixture = TestBed.createComponent(FinanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
