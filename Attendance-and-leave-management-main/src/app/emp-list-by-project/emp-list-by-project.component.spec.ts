import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListByProjectComponent } from './emp-list-by-project.component';

describe('EmpListByProjectComponent', () => {
  let component: EmpListByProjectComponent;
  let fixture: ComponentFixture<EmpListByProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpListByProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpListByProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
