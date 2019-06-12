import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageToolComponent } from './manage-tool.component';

describe('ManageToolComponent', () => {
  let component: ManageToolComponent;
  let fixture: ComponentFixture<ManageToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
