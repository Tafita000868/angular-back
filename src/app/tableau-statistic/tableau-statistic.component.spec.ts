import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauStatisticComponent } from './tableau-statistic.component';

describe('TableauStatisticComponent', () => {
  let component: TableauStatisticComponent;
  let fixture: ComponentFixture<TableauStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
