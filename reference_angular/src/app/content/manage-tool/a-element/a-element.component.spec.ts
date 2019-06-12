import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AElementComponent } from './a-element.component';

describe('AElementComponent', () => {
  let component: AElementComponent;
  let fixture: ComponentFixture<AElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
