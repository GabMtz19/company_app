import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelTableComponent } from './personnel-table.component';

describe('PersonnelTableComponent', () => {
  let component: PersonnelTableComponent;
  let fixture: ComponentFixture<PersonnelTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelTableComponent]
    });
    fixture = TestBed.createComponent(PersonnelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
