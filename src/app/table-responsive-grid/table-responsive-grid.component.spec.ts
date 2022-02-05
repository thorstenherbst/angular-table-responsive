import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResponsiveGridComponent } from './table-responsive-grid.component';

describe('TableResponsiveGridComponent', () => {
  let component: TableResponsiveGridComponent;
  let fixture: ComponentFixture<TableResponsiveGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableResponsiveGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResponsiveGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
